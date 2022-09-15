import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchItemAC } from '../../../redux/redux-pizzaItems';

import searchIcon from "../../../img/searchIcon.svg";
import crossIcon from "../../../img/crossIcon.svg"


export const HeaderSearchBlock = () => {

    const dispatch: any = useDispatch();
    const [searchValue,setSearchValue] = useState("");

    const searchItem = (itm: any) => {
        setSearchValue(itm)
        itm === '' ? dispatch(searchItemAC('')) : dispatch(searchItemAC(itm))
    }

    return (
        <>
            <div className='relative h-11 w-[30%] min-w-[212px]'>
                <div className='absolute top-0 left-3 h-full z-5 flex items-center'>
                <img src={searchIcon} alt="" />
                </div>
                <input
                className='block w-full h-full z-0 pl-[20%] rounded-lg border-[#D7D7D7] border-solid hover:border-solid hover:border-[#9c9c9c]
                focus:outline-none focus:border-[#6b6b6b] focus:border-[2px] focus:rounded-xl'
                value={searchValue}
                    onChange={(e) => searchItem(e.currentTarget.value)}
                    placeholder='write name of pizza...'/>
                   {searchValue && <div onClick={()=>setSearchValue("")} className='absolute top-0 right-3 h-full z-1 flex items-center'>
                <img src={crossIcon} alt="" />
                </div>} 
            </div>
        </>
    )
}