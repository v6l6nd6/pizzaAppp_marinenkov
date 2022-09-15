import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { itemsPizzaAPI } from "../api/api";
const _ = require("lodash");


export interface pizzaItemType {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number
}

export interface PizzaItemsType {
    items: Array<any>,
    sortItems: Array<any>,
    resultCodeOfSearch: number | null,
    isLoading: string,
    isError: boolean,
    params: {
        limitOfItemsPerSideP: any,
        activePageP: any,
        categoryP: any,
        sortByP: string,
        orderP: string,
        searchP: string
    }
}

export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    limit: any;
    page: any;
    category: any;
    search: string
};

export type postItemType = {
    imageUrl:string, 
    title:string, 
    types:Array<string>, 
    sizes:Array<string>, 
    price:string, 
    category:string, 
    rating:string
}



const initialState: PizzaItemsType = {
    items: [],
    sortItems: ['all', 'meat', 'vegetarian', 'gril', 'spicy', 'closed'],
    resultCodeOfSearch: null,
    params: {
        sortByP: 'rating',
        orderP: 'desc',
        limitOfItemsPerSideP: "4",
        activePageP: "1",
        categoryP: '',
        searchP: '',
    },
    isLoading: '',
    isError: false,
};

export const postItemThunk = createAsyncThunk(
    'mainPage/postItemThunk',

    async (param:postItemType) => {
        const { imageUrl, title, types, sizes, price, category, rating } = param
        return await itemsPizzaAPI.postItem(param)
    }
)


export const getItemsAxios = createAsyncThunk(
    'mainPage/getItemsAxios',
    async (params:SearchPizzaParams) => {
        const { sortBy, order, limit, page, category, search } = params;
        return await itemsPizzaAPI.getItems(_.pickBy({ sortBy, order, limit, page, category, search }))

    },

)

export const searchItems = createAsyncThunk(
    'mainPage/searchItems',
    async (params:string) => {
        return await itemsPizzaAPI.searchInput(params)
    }

)

export const setItemsCategory = createAsyncThunk(
    'mainPage/setItemsCategory',
    async (params:number) => {
        return await itemsPizzaAPI.setDefiniteItemsPizzaAPI(params)
    }
)

const itemsPizzaReducer = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        getItemsAC: (state, action) => {
            state.items = action.payload;
        },
        setActivePageAC: (state, action) => {
            state.params.activePageP = action.payload;
        },
        setSortingAC: (state, action) => {
            state.params.sortByP = action.payload;
        },
        setCategoryAC: (state, action) => {
            action.payload === "0" ? state.params.categoryP = ''
                : state.params.categoryP = action.payload
        },
        searchItemAC: (state, action) => {
            action.payload === "0" ? state.params.searchP = ''
                : state.params.searchP = action.payload
        },
        searchParamsAC: (state, action) => {
            state.params.sortByP = action.payload.sortBy;
            state.params.orderP = action.payload.order;
            state.params.limitOfItemsPerSideP = action.payload.limit;
            state.params.activePageP = action.payload.currentPage;
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAxios.pending, (state) => {
                state.isLoading = 'loading';
                state.isError = false;
            })
            .addCase(getItemsAxios.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = 'noLoading';
                state.isError = false;
            })
            .addCase(getItemsAxios.rejected, (state) => {
                state.isLoading = 'error'
                state.isError = true
            })
            .addCase(searchItems.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(setItemsCategory.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(postItemThunk.fulfilled, (state, action) => {
                console.log(action)

            })
    }


})


export const { getItemsAC, setActivePageAC, setSortingAC, setCategoryAC, searchItemAC, searchParamsAC } = itemsPizzaReducer.actions

export default itemsPizzaReducer.reducer



