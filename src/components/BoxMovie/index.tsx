type Tmovie = {
	poster_path: string,
	title: string
}

const BoxMovie = ({poster_path, title}: Tmovie) => {
  return (
    <div className="movie-box">
        <img src={ poster_path } alt={ title } className="movie-box-img"/>
        <div className="box-text">
            <h1 className="movie-tittle">{ title }</h1>
            <span className="movie-type">action</span>
            <a href="#" className="watch-btn play-btn">
                <i className='bx bx-right-arrow'></i>
            </a>
        </div>
    </div>
  )
}

export default BoxMovie