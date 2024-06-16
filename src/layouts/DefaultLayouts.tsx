import { Outlet } from 'react-router-dom'
import HeaderLogo from '../components/HeaderLogo'
import HeaderSearch from '../components/HeaderSearch'
import HeaderProfile from '../components/HeaderProfile'
import Navigation from '../components/Navigation'

const DefaultLayouts = () => {
  return (
    <>
        <header>
            <div className="nav container">
                <HeaderLogo />

                <HeaderSearch />
            
                <HeaderProfile />
                
                <Navigation />
            </div>
        </header>

        <Outlet />

        <div className="copyright">
            <p>&#169; MovieVennie All Right Reserved</p>
        </div>
    </>
  )
}

export default DefaultLayouts