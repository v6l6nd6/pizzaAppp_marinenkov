
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryAC } from "../../../redux/redux-pizzaItems";
import { RootState } from "../../../redux/redux-store";


export const HeaderCategoriesBlock = ({...props}) => {

    const dispatch = useDispatch();
    const sortItems = useSelector((store: RootState) => store.itemsPizzaReducer.sortItems);
    const sortItmArray = useSelector((state: RootState) => state.itemsPizzaReducer.sortItems);
    const [categoryNumber,setCategoryNumber] = useState(0);

    const setCategory = (category: string) => {
        const res = sortItmArray.indexOf(category)
        setCategoryNumber(res)
        return dispatch(setCategoryAC(String(res)))
    }

    const itemStyle= "transition duration-500 py-3 px-7 rounded-[30px] text-base font-bold bg-[#f7f7f7e4] hover:bg-[#e3e3e3f7]"
    
    return (
        <>
            <div className={"flex justify-start  gap-x-[3%] gap-y-2 min-w[110px] md:flex-wrap "}>
                {sortItems.map((sortItem: any, index: any) =>
                    <Link key={index} to={'/'} onClick={() =>setCategory(sortItem)} 
                    className={categoryNumber===index ? `bg-black text-white hover:text-black + ${itemStyle}`: `${itemStyle} + text-black`}>{sortItem}</Link>
                )}

            </div>
        </>
    )
}