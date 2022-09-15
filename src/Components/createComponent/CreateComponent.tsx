import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postItemThunk, postItemType } from "../../redux/redux-pizzaItems";
import arrowBack from "../../img/arrowBack.svg"

type typesEnum = {
    thin: String,
    thick: String,
}
type sizeEnum = {
    small: number,
    middle: number,
    big: number
}



export const CreateComponent = () => {


    const dispatch = useDispatch();
    const nav = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<postItemType>();

    const submitForm: SubmitHandler<postItemType> = async (data) => {

        const dataRes = {
            imageUrl:'',
            title: data.title,
            types: data.types,
            sizes: data.sizes,
            price: data.price,
            category: data.category,
            rating: data.rating,

        }
        
        // @ts-ignore
        // return  dispatch(postItemThunk(dataRes))
        return console.log(dataRes)
    }

    const typeStyle = (nameOfRegister:any,nameOfType: string, valueCurr: string) => {

        return (
            <div className="flex w-full h-6 items-center gap-4 border-[#f6f6f6] my-2 
            first:border-b border-0 border-solid bg-gray-300 rounded-xl p-[2px]">
                <div className="w-4 h-4 rounded-full  relative overflow-hidden transition-all transform active:ml-4">
                <input {...register(nameOfRegister)} type="checkbox" 
                className="w-20 h-20 absolute mt-[-7px] ml-[-10px] box-border cursor-pointer" 
                value={valueCurr} />
                </div>
                <label className="text-black font-bold">{nameOfType}</label>
            </div>
        )
    }
    const radioBtnStyle = (nameOfRegister:any,nameOfType: string, valueCurr: string) => {

        return (
            <div className="flex w-full h-6 items-center gap-4 border-[#f6f6f6] my-2 
            first:border-b border-0 border-solid bg-gray-300 rounded-xl p-[2px]">
                <div className="w-4 h-4 rounded-full  relative overflow-hidden transition-all transform active:ml-4">
                <input {...register(nameOfRegister)} type="radio" 
                className="w-[50px] h-[50px]  absolute mt-[-14px] ml-[-21px] box-border z-10 cursor-pointer" 
                value={valueCurr} />
                </div>
                <label className="text-black font-bold">{nameOfType}</label>
            </div>
        )
    }

    return (
        <>
        <div className="flex flex-col">
            <div onClick={() => nav(-1)}  
            className="flex items-center w-32 h-10 rounded-2xl bg-gray-300 justify-center hover:bg-gray-100 font-bold gap-1 cursor-pointer">
                <img className="w-4" src={arrowBack} alt="" />
    <div className="">Back</div>
        </div>
            <form onSubmit={handleSubmit(submitForm)} className="w-80 flex flex-col m-auto p-2">
                <div className="mb-2 ">
                    <input {...register("title")} 
                    className="w-full pl-[40%] border border-solid border-[#e0e0e0] rounded-xl cursor-pointer" placeholder="Title..." />
                </div>
                <div>
                    <input {...register("price")} 
                    className="w-full pl-[40%] border border-solid border-[#e0e0e0] rounded-xl cursor-pointer" type="number" placeholder="Price... " />
                </div>
                <div className=" flex flex-col">
                <div className="">Types</div>
                    <div className="text-xs">you can choose several options</div>
                {typeStyle('types','Thin-crust', '0')}
                {typeStyle('types','Thuck', '1')}
                </div>
                <div className="flex flex-col">
                <div className="">Size</div>
                <div className="text-xs">you can choose several options</div>
                <div className="flex flex-col">
                 {typeStyle("sizes",'small size', '10')}
                 {typeStyle("sizes",'medium size', '12')}
                 {typeStyle("sizes",'large size', '15')}
                 </div>
                 </div>
                <div>Category</div>
                <div className="text-xs">you can only choose only one option</div>
               {radioBtnStyle('category','Meat','1')}
                {radioBtnStyle('category','Vegetarian','2')}
                {radioBtnStyle('category','Grill','3')}
                 {radioBtnStyle('category','Spicy','4')}
                 {radioBtnStyle('category','Closed','5')}
                
                <div>Rating</div>
                <div className="text-xs">you can only choose only one option</div>
                {radioBtnStyle('rating','Low','2')}
                {radioBtnStyle('rating','Medium','5')}
                {radioBtnStyle('rating','high','9')}
                <input type="submit" 
                className="cursor-pointer w-full h-7 rounded-xl bg-black border-none
                 text-white transform-all transition font-bold active:mt-2 active:ml-2 active:text-black active:bg-[#e0e0e0]" 
                value={'Submit'} />
            </form>
            </div>
        </>
    )
} // sortItems: ['all', 'meat', 'vegetarian', 'gril', 'spicy', 'closed'],