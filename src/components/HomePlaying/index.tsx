import { useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import usePlaying from "../../stores/usePlaying"
import BoxMovie from "../BoxMovie";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomePlaying = () => {
    const {error,fetchMoviePlaying, isLoading, movies_playing } = usePlaying()

    useEffect (() => {
        fetchMoviePlaying()
    },[fetchMoviePlaying])

  return (
    <section className="playing container" id="now-playing">
        <div className="heading">
            <h2 className="heading-title">Now Playing</h2>
        </div>
        
        { error && (<div>{ error }</div>) }
        <Swiper
        className='popular-content'
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
            1024: {
            slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 2,
            },
        }}
        navigation
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
        
        {
            isLoading ? Array.from({ length: 4 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="movie-box" key={index}>
						<Skeleton height={380} width={246} className="movie-box-img" />
						<div className="box-text">
							<Skeleton width={`60%`} height={24} className="movie-title" />
							<Skeleton width={`40%`} height={20} className="movie-type" />
							<Skeleton width={40} height={40} className="watch-btn play-btn" />
						</div>
					</div>
                </SwiperSlide>
            ))
            : movies_playing.map((movie_playing) => {
                return(
                    <SwiperSlide key = {`popular_${movie_playing.id}`}>
                        <BoxMovie poster_path = {`https://www.themoviedb.org/t/p/w220_and_h330_face${movie_playing.poster_path}`} title ={movie_playing.title} />
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
    </section>
    
  )
}

export default HomePlaying