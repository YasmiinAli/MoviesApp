import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css'

export default function MovieDetails() {
    let location = useLocation()
    let movie = location.state
    console.log(movie)

  return (
    <>
    <div className='contain' >
    <img className={styles.backgroundImg}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Cardcap" />
  <div className={styles.centered}>
<h2>{movie.title}</h2>
<p className='fw-bold'>{movie.overview}</p>
  </div>
<img className={styles.lefted}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Cardcap" />
<i className={`fa-regular fa-heart fa-lg cursor-pointer ${styles.right}`}></i>
</div>

</>


  )
}
