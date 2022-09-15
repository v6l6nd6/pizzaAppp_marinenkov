import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemsPizzaAPI } from "../api/api";
import { calcTotalPrice, CartItem } from "./calcTotalPrice";

interface CartSliceState {
    totalSum: number;
    addItems: CartItem[];
}

export const deleteItemThunk = createAsyncThunk<any>(
    'cardReducer/deleteItemThunk',
    async (param) => {
        return await itemsPizzaAPI.deleteItemAPI(param);

    }
)

const initialState: CartSliceState = {
    totalSum: 0,
    addItems: [],
};

const cardPizzaReducer = createSlice({
    name: 'cardReducer',
    initialState,
    reducers: {
        addItemAC: (state, action: PayloadAction<CartItem>) => {

            const findItems = state.addItems.find((itm) => itm.id === action.payload.id);
            if (findItems) {
                findItems.label++
            } else {
                state.addItems.push({ ...action.payload, label: 1 })
            }
            state.totalSum =calcTotalPrice(state.addItems)
        },
        removeItemAC: (state, action) => {
            const findItem = state.addItems.find((itm: any) => itm.id === action.payload);
            state.addItems = state.addItems.filter((itm) => itm.id !== action.payload)
            if (findItem) {
                state.totalSum = calcTotalPrice(state.addItems)
            }
        },
        clearShopCartAC:(state)=>{
            state.addItems=[]
            state.totalSum=0
        },
        minusItemAC: (state, action) => {
            const findItem = state.addItems.find((itm) => itm.id === action.payload.id);
            if (findItem) {
                if (findItem.label > 0) {
                    findItem.label--
                    state.totalSum = calcTotalPrice(state.addItems)
                }
            }
        },
        plusItemAC: (state, action) => {
            const findItem = state.addItems.find((itm) => itm.id === action.payload.id);
            if (findItem) {
                findItem.label++
                state.totalSum = calcTotalPrice(state.addItems)
            }
        }
    }
})

export const { addItemAC, removeItemAC, minusItemAC, plusItemAC, clearShopCartAC } = cardPizzaReducer.actions

export default cardPizzaReducer.reducer


