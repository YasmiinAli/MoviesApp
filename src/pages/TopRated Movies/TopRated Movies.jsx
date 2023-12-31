import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRated } from '../../store/TopRatedSlice/TopRatedSlice'
import LoadindSpinner from '../../components/LoadindSpinner/LoadindSpinner'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function TopRatedMovies() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopRated())
  }, [])
  let { movies, isLoading } = useSelector((state) => state.topRated)

  return (
    <>
      {isLoading ? (
        <>
          <LoadindSpinner />
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {movies.map((movie, index) => (
                <div className="col-md-3 mb-md-4" key={index}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
    
        </>
      )}
    </>
  )
}
