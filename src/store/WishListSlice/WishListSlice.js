import {  createSlice } from "@reduxjs/toolkit";
let initialState ={wishListItems: localStorage.getItem('wishListItems') ? JSON.parse(localStorage.getItem('wishListItems')) : [],
     isClicked:false};




 let WishList = createSlice({
name:'wishList',
initialState,
reducers:{
    addToWishList : (state, action) => {

    },
        clearAllWishList : (state, action) => {
          state.wishListItems=[]
    },
        removeFromWishList : (state, action) => {

    }
},

})


export const {addToWishList, clearAllWishList, removeFromWishList} = WishList.actions
export default WishList.reducer
