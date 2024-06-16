const HomeBanner = () => {
  return (
    <section className="home container" id="home">
        <div className="banner-home">
          <img src="/img/home-background.png" alt="" className="home-img" />
          <div className="home-text">
              <h1 className="home-tittle">Hitman's Wife's <br />Bodyguard</h1>
              <p>Releasing 23 july</p>
              <a href="#" className="watch-btn">
                  <i className='bx bx-right-arrow'></i>
                  <span>Watch the trailler</span>
              </a>
          </div>
        </div>
    </section>
  )
}

export default HomeBanner