import React from 'react'
import logo from '../../assets/logo.png'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 mb-4">
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto fw-bold ">
            <li className="nav-item ">
              <Link className="nav-link" to="/popular">
                Popular{' '}
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/topRated">
                Top Rated{' '}
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/upComing">
                Upcoming{' '}
              </Link>
            </li>
            {/* <li className="nav-item ">
              <Link className="nav-link" to="/wishList">
                WishList{' '}
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}
