import { Provider } from 'react-redux'
import { store } from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'

import NotFound from './pages/NotFound/NotFound'
import Layout from './components/Layout/Layout'
import './App.css'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PopularMovies from './pages/PopularMovies/PopularMovies'
import UpcomingMovies from './pages/Upcoming Movies/Upcoming Movies'
import TopRatedMovies from './pages/TopRated Movies/TopRated Movies'
import WishList from './pages/WishList/WishList'

function App() {
  let routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'popular', element: <PopularMovies /> },
        { path: 'upComing', element: <UpcomingMovies /> },
        { path: 'topRated', element: <TopRatedMovies /> },
        { path: 'wishList', element: <WishList /> },
        { path: 'movieDetails/:id', element: <MovieDetails /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
