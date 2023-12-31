import React, { useEffect } from 'react'
import { getAllMovies } from '../../store/MovieSlice/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import LoadindSpinner from '../LoadindSpinner/LoadindSpinner'

export default function Movies() {
  let dispatch = useDispatch()
  let {movies, isLoading}= useSelector((state)=>state.movie)
  console.log(movies);
  useEffect(()=>{
    dispatch(getAllMovies())
  },[])
  return (
    <>
      {isLoading?< >
      <LoadindSpinner />
      </> :
      <>
      <div className='container'>
      <div className='row' >
      {
        movies.map((movie,index)=>
          <div className="col-md-3 mb-md-4" key={index}>
            <MovieCard movie={movie}/>
          </div>
          )
      }
      </div>
      </div>
      
      </>
      }
      </>
  )
}
