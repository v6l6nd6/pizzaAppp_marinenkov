
import itemsPizzaReducer from "./redux-pizzaItems";
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import cardPizzaReducer from "./redux-cart"






export const store = configureStore({
  reducer: {
    itemsPizzaReducer,
    cardPizzaReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;