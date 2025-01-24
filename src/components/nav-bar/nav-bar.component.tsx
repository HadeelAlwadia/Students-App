import React, { useContext } from 'react'
import './nav-bar.css';
import { Link, useLocation } from 'react-router-dom';
import { Role } from '../../types';
import { AppContext } from '../../store';

const NavBar = () => {
  const location = useLocation();
  const user= useContext(AppContext).state.userInfo;
 console.log(user)

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.removeItem('user-info')
    localStorage.removeItem('students-info')
    setTimeout(()=>{
      window.location.href='/login'

    },1)


  }


  return (
    <nav>
      <span>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home Page</Link>
        {
          user?.role === Role.ADMIN && (
            <Link to='/add' className={location.pathname === '/add' ? 'active' : ''}>Add Student</Link>
          )
        }
        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About App</Link>
      </span>
      <span>
        {
          user?.userName
            ? `Hello ${user.userName}`
            : <Link to='/login' className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        }
        {
          user?.userName && <Link onClick={handleLogout} to=''>Logout</Link>
        }
      </span>
    </nav>
  )
}

export default NavBar