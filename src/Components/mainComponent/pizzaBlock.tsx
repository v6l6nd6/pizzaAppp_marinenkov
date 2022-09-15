import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAC } from "../../redux/redux-cart";
import { RootState } from "../../redux/redux-store";
import logoDefault from "../../img/pizzaDefault.jpg"


export type PizzaBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};

const typeNames = ['thin-crust', 'traditional'];

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id,
    title,
    price,
    imageUrl,
    sizes,
    types, }) => {

    const addedItems = useSelector((state: RootState) => state.cardPizzaReducer.addItems)
    const isMounted = useRef(false)

    const [actiiveType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const [sumOfLabel, setSumOfLabel] = useState(0)
    const dispatch = useDispatch();


    const onClickBtn = () => {
        const itm: any = {
            id,
            title,
            price,
            imageUrl,
            sizes: sizes[activeSize],
            types: typeNames[actiiveType],

        }
        return dispatch(addItemAC(itm))
    }

    useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(addedItems);
            localStorage.setItem('cart', json)
        }

        isMounted.current = true

    }, [addedItems])


    useEffect(() => {
       
        addedItems.find((item) => {
            if (item.id === id) {
                return setSumOfLabel(item.label)
            } else {
                return ""
            }
        });


    }, [sumOfLabel, addedItems, id])

    const typesStyles = 'w-full text-center py-3 rounded-[5px] cursor-pointer font-extrabold'

    return (
        <>
            <li key={id} className="flex flex-col w-[280px] h-full m-auto transform transition-all duration-700 hover:opacity-80 
            hover:scale-105
            hover:ease-in-out
            md:w-[240px]
            mdSmm:w-[170px]
            md:animate-none
            ">
                <div className="w-full h-full flex-1">
                    <img className="min-w-full min-h-full object-center " src={imageUrl==='' ? logoDefault : imageUrl} alt="" />
                </div>
                <div className="text-xl font-bold text-black text-center pt-[11px] pb-[22px] flex-auto">{title}</div>

                <div className="flex flex-col gap-1.5 bg-[#F3F3F3] p-2.5 rounded-[10px]">
                    <div className="flex gap-1.5 justify-between">
                        {types.map((pizzaType: any) =>
                            <div key={pizzaType} onClick={() => setActiveType(pizzaType)} className={actiiveType === pizzaType
                                ? `${typesStyles} + bg-white` : `${typesStyles} + hover:bg-[#dfdfdf]`
                            }>{typeNames[pizzaType]}</div>
                        )}
                    </div>
                    <div className="flex gap-1.5">
                        {sizes.map((pizzaSize: any, index: any) =>
                            <div key={index} onClick={() => setActiveSize(index)}
                                className={activeSize === index ? `${typesStyles} + bg-white` : `${typesStyles} + hover:bg-[#dfdfdf]`}>
                                {pizzaSize} inc.</div>
                        )}
                    </div>
                </div>
                <div  className="flex justify-between items-center pt-[17px] ">
                    <div className="font-black text-black-700 text-xl w-full py-[11px] ml-2">{price} $</div>
                    <div onClick={() => onClickBtn()} className="  cursor-pointer flex justify-center items-center w-full border-solid border-black border-[1px] py-[11px] mr-2 rounded-[30px] gap-x-1 hover:bg-[#F3F3F3] hover:border-none
                    mdSmm:w-[50%] mdSmm:bg-[#F3F3F3] mdSmm:border-none
                    ">
                        <div><svg className=" h-[15px] w-[15px] flex items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg></div>
                        <div className="text-[16px] font-extrabold mdSmm:hidden">add to cart</div>
                        <div className="text-[16px] font-bold ">{sumOfLabel > 0 ? sumOfLabel : ''}</div>
                    </div>
                </div>
            </li>

        </>

    )

}