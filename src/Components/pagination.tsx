import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsAC, getItemsAxios, SearchPizzaParams, setActivePageAC } from "../redux/redux-pizzaItems";
import { AppDispatch, RootState } from "../redux/redux-store";
// import { getPageLimitThunkCreator } from "../redux/redux-pizzaItems";



export const Paginator = ({ ...props }) => {

    const { limitOfItemsPerSideP, activePageP } = useSelector((state: RootState) => state.itemsPizzaReducer.params)
    const dispatch: AppDispatch = useDispatch();

    let totalItemsCount = 10;
    let pageSize: any = limitOfItemsPerSideP;
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(totalItemsCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1;
    let rightPortionPageNumber = portionNumber * pageSize;



    useEffect(() => {


    }, [dispatch])


    const btnArrowStyle = 'flex justify-center items-center w-[50px] h-[50px] rounded-full border-none bg-[#dfdfdf] text-black font-extrabold cursor-pointer hover:bg-gray-300';
    const pageStyle = 'mx-4 flex w-[45px] h-[45px] bg-[#8e8e8ed7] rounded-full items-center justify-center cursor-pointer hover:bg-gray-300 '

    return (
        <>
            <div className={'flex max-w-[400px] justify-between items-center mt-8'}>
                <div>
                    {leftPortionPageNumber - 1 !== 0 ? <button className={btnArrowStyle} 
                    onClick={() => { setPortionNumber(portionNumber - 1) }}>back</button> : ""}
                </div>
                <div className="flex  justify-center min-w-[100px]">
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(
                        (p) => {
                            return <span key={p}
                                className={Number(activePageP) === p ? `${pageStyle} + border-solid border-black` : pageStyle
                                } onClick={() => props.onPageChange(p)}>{p}</span>
                        }
                    )
                    }
                </div>
                <div>
                    {portionCount > portionNumber ? <button
                        className={btnArrowStyle}
                        onClick={() => { setPortionNumber(portionNumber + 1) }}>up</button> : ""}
                </div>
            </div>
        </>
    )
}