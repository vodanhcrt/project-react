import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BoxMovie from "../components/BoxMovie";
import { Pagination } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect } from "react";

interface TMovieplaying {
    id: number;
    title: string;
    poster_path: string;
}

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8'
  }
}
const PlayingPage = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const page_str = params.get("page");
	const page = page_str ? parseInt(page_str) : 1;

    useEffect( () => {
        if(page === 1) navigate("/now-playing")
    },[page, navigate])

    const getMoviePlaying = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
        return response.data.results
    }
    const {isLoading, error, isError, data} = useQuery<TMovieplaying[], Error>({
        queryKey : ['movie_playing',page],
        queryFn: getMoviePlaying
    })
  
  return (
    <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Now Playing- Movies Website</title>
          <link rel="canonical" href="http://localhost:5173/" />
          <meta name="description" content="Now Playing- Movies Website" />
        </Helmet>
        <section className="popular container" id="popular">
            <div className="heading">
                <h2 className="heading-title">Now Playing</h2>
            </div>
          
            { isError && (<div>{ error.message}</div>)}
            <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-[15px]">
            {
                isLoading ? (
                    Array.from({ length: 20 }).map((_, index) => (
                        <div className="movie-box" key={index}>
                            <Skeleton height={380} width={246} className="movie-box-img" />
                            <div className="box-text">
                                <Skeleton width={`60%`} height={24} className="movie-title" />
                                <Skeleton width={`40%`} height={20} className="movie-type" />
                                <Skeleton width={40} height={40} className="watch-btn play-btn" />
                            </div>
                        </div>
                    ))
                )
                :data?.map((item) => {
                    return(
                        <BoxMovie key = {item.id } poster_path = {`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} title = { item.title } />
                    )
                })
            }
            </div>
            <Pagination
                className="my-5 text-center text-white"
                onChange={ (page) => {
                    navigate(`?page=${page}`)
                } }
                defaultCurrent={1}
                showSizeChanger = {false}
                responsive
                total={500}
            />

            
        </section>
    </>
  )
}

export default PlayingPage