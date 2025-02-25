import {createSlice} from '@reduxjs/toolkit'

const initialState=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems : []}


 //helper function for correcting deximal places.
   const addDecimals=(num)=>{
      return (Math.round(num*100)/100).toFixed(2)
     }

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload

            const existItem=state.cartItems.find((c) => c._id === item._id)

            if (existItem) {
                existItem.quantity = item.quantity; // add whatever the quantity (existItem in cart page) of item passed on to the payload(item in product page).
            } else {
                state.cartItems.push(item); 
            }
            
            
            //caluculate items price.
            state.itemsPrice=addDecimals(state.cartItems.reduce((acc,item)=>acc + item.price * item.quantity,0));

            //calculate shipping price
            state.shippingPrice=addDecimals(state.itemsPrice > 100 ? 0 : 10)

            //calculate total price
            state.totalPrice=(Number(state.itemsPrice)+Number(state.shippingPrice)).toFixed(2)

            //saving everything in local storage
            localStorage.setItem('cart',JSON.stringify(state))

        },

        removeFromCart:(state,action)=>{

            state.cartItems=state.cartItems.filter((c)=>c._id !== action.payload)

             //caluculate items price.
             state.itemsPrice=addDecimals(state.cartItems.reduce((acc,item)=>acc + item.price * item.quantity,0));

             //calculate shipping price
             state.shippingPrice=addDecimals(state.itemsPrice > 100 ? 0 : 10)
 
             //calculate total price
             state.totalPrice=(Number(state.itemsPrice)+Number(state.shippingPrice)).toFixed(2)
 
             //saving everything in local storage
             localStorage.setItem('cart',JSON.stringify(state))
        }
        
    }

})

export const { addToCart,removeFromCart }=cartSlice.actions

export default cartSlice.reducer;