import axios from "axios";
import { postItemType } from "../redux/redux-pizzaItems";


export const instancce = axios.create({
  
    baseURL: "https://62c6aede74e1381c0a65fed5.mockapi.io/items"
    
})

export const itemsPizzaAPI = {
    getItems(params:any){
      return instancce.get(``,{params}).then((response) => response.data)
    },
    setDefiniteItemsPizzaAPI(numberCategory:any){
        return instancce.get(`?category=${numberCategory+1}`).then((response)=>response.data)
    },
    searchInput(nameOfItm:any){
        return  instancce.get(`?search=${nameOfItm}`).then((response)=>response.data)
    },
    deleteItemAPI(id:any){
        return instancce.delete(`/${id}`)
    },
    postItem(postItem:postItemType){
        debugger
        return instancce.post(``,postItem).then((data)=>data)
    }  
    
}
