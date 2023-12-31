import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadindSpinner from '../../components/LoadindSpinner/LoadindSpinner'
import MovieCard from '../../components/MovieCard/MovieCard'
import { getPopular } from '../../store/PopularSlice/PopularSlice'

export default function PopularMovies() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPopular())
  }, [])
  let { movies, isLoading } = useSelector((state) => state.popular)

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
