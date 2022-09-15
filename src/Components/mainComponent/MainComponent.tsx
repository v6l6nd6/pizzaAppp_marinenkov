import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import { PizzaBlock } from "./pizzaBlock";
import { HeaderCategoriesBlock } from "../headersComps/HeaderCategoriesBlock/HeaderCategoriesBlock";
import { HeaderSortBlock } from "../headersComps/headerSortBlock/HeaderSortBlock";
import { Paginator } from "../pagination";
import { getItemsAxios, searchParamsAC, setActivePageAC} from "../../redux/redux-pizzaItems";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import { Skeleton } from "./Skeleton";
import createlogo from '../../img/createlogo.svg'
const _ = require("lodash");

export const MainComponent = () => {

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    let { limitOfItemsPerSideP, activePageP, categoryP, sortByP, orderP, searchP } = useSelector((state: RootState) => state.itemsPizzaReducer.params)
    const itemsPizza = useSelector((state: RootState) => state.itemsPizzaReducer.items);
    const isLoading = useSelector((state: RootState) => state.itemsPizzaReducer.isLoading);
    const isError = useSelector((state: RootState) => state.itemsPizzaReducer.isError);
    const [activePage, setActivePage] = useState(activePageP);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            console.log(params)

            dispatch(searchParamsAC({ ...params }))
        }
    }, [dispatch])

    useEffect(() => {

        dispatch(getItemsAxios({
            sortBy: sortByP,
            order: orderP,
            limit: limitOfItemsPerSideP,
            page: activePageP,
            category: categoryP,
            search: searchP,
        }))

    }, [limitOfItemsPerSideP, activePageP, categoryP, sortByP, orderP, searchP, dispatch])

    useEffect(() => {
        const queryString = qs.stringify(_.pickBy({
            sortBy: sortByP,
            order: orderP,
            limit: limitOfItemsPerSideP,
            currentPage: activePageP,
            category: categoryP,
            search: searchP
        }))
        navigate(`?${queryString}`)

    }, [limitOfItemsPerSideP, activePageP, categoryP, sortByP, orderP, searchP])



    const onPageChange = (pg: any) => {
        setActivePage(pg)
        return dispatch(setActivePageAC(pg))
    }
    

    const pizzas = itemsPizza.map((itemPizza: any) => <PizzaBlock {...itemPizza} key={itemPizza.id} />);
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <div className="flex flex-col">
                <div className="grid grid-cols-[7fr,2fr] grid-rows-1 items-center
                md:grid-cols-1 md:grid-rows-2 md:items-start mb-8
                ">
                <HeaderCategoriesBlock />
                <HeaderSortBlock/>
                </div>
                <div className="flex items-center justify-between md:flex-col md:justify-center md:items-center md:gap-4 md:mb-8">
                <div className="text-3xl font-extrabold text-black">
                All pizzas
                </div>
                <Link className="flex items-center gap-2 " to="createSide">
                <div className="text-xl text-black font-bold hover:text-gray-400">Create pits</div>
                <img src={createlogo} className="w-5 h-5" alt="" />
                </Link>
                </div>
                <ul className="grid grid-cols-[1fr,1fr,1fr] gap-9
                md:gap-6 mdSm:grid-cols-2
                
                ">
                {isError===true && isLoading === 'error'
                 ? (<div>
                        <div className="">
                            <h2>An error has occurred 😕</h2>
                            <p>Unfortunately, it was not possible to get the pits. Try again later.</p>
                        </div>
                    </div>) 
                    : <>{isLoading === 'loading' ? skeletons : pizzas}</>
                    }
                   
                </ul>
                <div><Paginator onPageChange={onPageChange} activePage={activePage} /></div>
            </div>
           
        </>
    )
}




