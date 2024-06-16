import axios from "axios";
import { create } from "zustand";

interface TMoviepopular {
    id: number;
    title: string;
    poster_path: string;
}

interface TMoviespopular {
    movies_popular: TMoviepopular[]; 
    isLoading: boolean;
    error: string | null;
    fetchMoviePopular: () => void;
}

const options = {
    params: {language: 'en-US', page: '1'},
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
    }
  };
  

const usePopular = create<TMoviespopular>((set) => ({
    movies_popular: [], 
    isLoading: false,
    error: null,

    fetchMoviePopular : async () => {
        try {
            set({ isLoading: true, error: null });
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, options)
            if(response.status === 200) set({ movies_popular: response.data.results, isLoading: false })
            else set({ isLoading: false, error: "Error fetching movie" });
        } catch (error) {
            console.error("Error fetching products:", error);
            set({ isLoading: false, error: "Error fetching movie" });
        }
    }

}));

export default usePopular;