import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-store";
import { setSortingAC } from "../../../redux/redux-pizzaItems";
import arrowPng from "../../../img/arrow.png"

export const HeaderSortBlock = () => {
  const sortArray = ['rating', 'price', 'name'];
  const sortNameBy = useSelector((state: RootState) => state.itemsPizzaReducer.params.sortByP);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const dispatch: any = useDispatch();
  const sortItemStyle = 'cursor-pointer hover:text-gray-400'
  const onSortChange = (pg: any) => {
    setSelected(sortArray.indexOf(pg))
    setIsVisible(false)
    return dispatch(setSortingAC(pg))
  }

  useEffect(() => {

  }, [sortNameBy])



  return (
    <>
      <div className='
        relative
        flex
        min-w-[245px] 
        justify-end
         md:col-span-2 md:justify-start
         md:flex-col
         md:mt-2
         md:min-h-full
         
         '>
        <div className="flex items-center gap-x-2  md:gap-x-1">
          <img  className="w-[15px] h-[15px]" src={arrowPng} alt="" />
          <b>Sort by :</b>
          <span onClick={() => setIsVisible(!isVisible)} className={'text-[#8c8c8c] cursor-pointer hover:text-[#dfdfdf]'}>{sortNameBy}</span>
        </div>
        {isVisible && <div className="bg-[#f2f2f2af] absolute top-[30px] right-0 w-[100px] rounded-xl  transition ease-in-out
         md:relative md:flex p-3 md:w-full md:h-full md:top-1">
          <ul className="flex flex-col justify-center items-center gap-y-1 md:items-start">
            {sortArray.map((sortItem, index) =>
              <li key={index} onClick={() => onSortChange(sortItem)} className={selected === index ? `${sortItemStyle}+ text-black font-extrabold`  : `${sortItemStyle}`}>{sortItem}</li>
            )}
          </ul>
        </div>}
      </div>

    </>
  )
}