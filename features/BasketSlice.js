import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 items : [],
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   addtoBasket: (state,action) => {
      state.items = [...state.items, action.payload]
    },
    removefromBasket: (state,action) => {
      let index = state.items.findIndex((item)=> item.id === action.payload.id)
      let newBasket = [...state.items]
      if(index>=0){
        newBasket.splice(index,1)
      }
     //// let samplebasket = [...state.items]
      
      // if(action.payload.id){
      //  samplebasket = samplebasket.filter((item)=> item.id !== action.payload.id)    
      // }
      else{
        console.warn(`Cant remove the product with id ${action.payload.id} as its not in basket`)

      }
      state.items = newBasket
     // state.items = samplebasket
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtoBasket,removefromBasket } = BasketSlice.actions

export const selectedItems = (state)=> state.basket.items

export const selectedItemsById = (state,id)=> state.basket.items.filter((item)=> item.id === id)

export const ItemsTotal = (state)=> 
  state.basket.items.reduce((total,item)=>
   total += Number(item.price)
   
    ,0);
export default BasketSlice.reducer