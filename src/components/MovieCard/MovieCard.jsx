import React from 'react'
import styles from './MovieCard.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getMovie } from '../../store/MovieSlice/MovieSlice';

export default function MovieCard({movie}) {
  let nav = useNavigate()
  function navigateDetails(id) {
    nav(`/movieDetails/${id}`, {state:movie})
    
  }
  return (
    <div className="card h-100 position-relative cursor-pointer mb-2" onClick={()=>navigateDetails(movie.id)}>
  <img className="card-img-top " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Cardcap" />
  <div className={styles.vote}>{movie.vote_average.toFixed(1)}</div>
  <div className="card-body">
    <h5 className="card-title text-center">{movie.title}</h5>
  </div>
</div>
  )
}
