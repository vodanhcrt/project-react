import axios from "axios";
import { create } from "zustand";

interface TMovieplaying {
    id: number;
    title: string;
    poster_path: string;
}

interface TMoviesplaying {
    movies_playing: TMovieplaying[],
    isLoading: boolean,
    error: string | null,
    fetchMoviePlaying : () => void,
}

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
    }
};

const usePlaying  = create<TMoviesplaying>((set) => ({
    movies_playing : [],
    isLoading: false,
    error: null,
    
    fetchMoviePlaying: async () => {
        try {
            set({ isLoading: true, error: null }) 
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options) 
            if(response.status === 200) set({isLoading: false, error: null,movies_playing: response.data.results})
            else {set({isLoading: false, error: "Error fetching movie"})}
        } catch (error) {
            set({isLoading: false, error: "Error fetching movie"})
        }
    }
 
}));

export default usePlaying;