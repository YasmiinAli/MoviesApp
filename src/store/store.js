import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './MovieSlice/MovieSlice'
import TopRatedReducer from './TopRatedSlice/TopRatedSlice'
import UpComingReducer from './UpComingSlice/UpComingSlice'
import PopularReducer from './PopularSlice/PopularSlice'
import wishListReducer from './WishListSlice/WishListSlice'


export let store = configureStore({
  reducer: {
    movie: movieReducer,
    topRated: TopRatedReducer,
    upComing: UpComingReducer,
    popular: PopularReducer,
    wishList: wishListReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
