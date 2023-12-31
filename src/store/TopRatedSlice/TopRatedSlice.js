import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let baseUrl ='https://api.themoviedb.org/3/movie/';
let initialState ={movies:[], isLoading:false};
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMThmZjM0YmQ0YTBkMTk1MjlmM2FkZTg0MjIyNTI3MCIsInN1YiI6IjYyNDQzMGQ0ODExNDBmMDA5MGExNDU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.744U4F8BG6Hk8i-CP1crolA5FeoVQuFQzAHdomz960Y'
  }
};

export let getTopRated =createAsyncThunk('movies/getTopRated',async()=>{
  let {data} = await axios.get(`${baseUrl}top_rated?language=en-US&page=1` ,options)
  return data.results
})

 let topRatedReducer = createSlice({
name:'topRated',
initialState,
extraReducers: function(builder){
    builder.addCase(getTopRated.fulfilled,(state,action)=>{
        state.movies = action.payload
        state.isLoading = false
    })
    builder.addCase(getTopRated.pending, (state, action)=>{
                state.isLoading = true
    } )
    
        

}
})

export default topRatedReducer.reducer