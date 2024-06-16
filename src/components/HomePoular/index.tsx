import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BoxMovie from '../BoxMovie';
import usePopular from '../../stores/usePopular';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomePopular = () => {
    const {error, isLoading, fetchMoviePopular, movies_popular} = usePopular()
    useEffect(() => {
        fetchMoviePopular();
    }, [fetchMoviePopular]);



    return (
    <section className="popular container" id="popular">
        
        <div className="heading">
            <h2 className="heading-title">Popular Movies</h2>
        </div>

        {error && <div>Error: {error}</div>}

       
    
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
        
        {isLoading ? Array.from({ length: 4 }).map((_, index) => (
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
            : movies_popular.map((movie_popular) => (
                <SwiperSlide key={`popular_${movie_popular.id}`}>
                    <BoxMovie poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie_popular.poster_path}`} title={movie_popular.title} />
                </SwiperSlide>
            ))
        }
        </Swiper>

    </section>
  )
}

export default HomePopular