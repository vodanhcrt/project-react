
import { NavLink  } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navbar">
        <NavLink  to="/" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"} >
            <i className='bx bx-home'></i>
            <span className="nav-link-tittle">Home</span>
        </NavLink >
        <NavLink  to="/popular-movie" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}>
            <i className='bx bxs-hot'></i>
            <span className="nav-link-tittle">Pouplar Movie</span>
        </NavLink >
       
        <NavLink  to="/now-playing" className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}>
            <i className='bx bx-compass'></i>
            <span className="nav-link-tittle">Now Playing</span>
        </NavLink>
    </div>
  )
}

export default Navigation