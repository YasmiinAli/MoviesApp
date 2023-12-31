import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import LoadindSpinner from '../../components/LoadindSpinner/LoadindSpinner'
import { getUpComing } from '../../store/UpComingSlice/UpComingSlice'

export default function UpcomingMovies() {
  let dispatch = useDispatch()
  let { movies, isLoading } = useSelector((state) => state.upComing)
  console.log(movies)
  useEffect(() => {
    dispatch(getUpComing())
  }, [])
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
