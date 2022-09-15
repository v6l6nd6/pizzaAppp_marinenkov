import { useDispatch } from "react-redux";
import { deleteItemThunk, minusItemAC, plusItemAC, removeItemAC } from "../../redux/redux-cart";
import minus from "../../img/minus.svg";
import plus from "../../img/plus.svg";
import kreuz from "../../img/kreuz.svg";
import logoDefault from "../../img/pizzaDefault.jpg"

export const CartItem = ({ addedItem }: any) => {

    const dispatch = useDispatch();
    const deleteItem = (idItm: any) => {
        dispatch(removeItemAC(idItm))
        // @ts-ignore
        return dispatch(deleteItemThunk(idItm))
    }
    const removeAddItem = (id: any) => {
        return dispatch(removeItemAC(id))
    }
    const minusAddItem = (itm: object) => {
        return dispatch(minusItemAC(itm))
    }
    const plusAddItem = (itm: any) => {
        return dispatch(plusItemAC(itm))
    }

    const addItemStyle = 'flex justify-center items-center w-[32px] h-[32px] rounded-full border-[#c6c6c6] border-solid relative cursor-pointer hover:border-[#979797]'

    return (
        <>
            <div className='grid grid-cols-[1fr,2fr,1fr,1fr,1fr] grid-rows-1 border-0  border-solid border-t border-gray-300 py-[30px]
 sm:grid-cols-2 sm:grid-rows-4 
 '>
                <div className='w-full h-full sm:col-span-2 '>
                    <div className='flex w-[64px] h-[64px] sm:mx-auto'>
                        <img className='w-full h-full' src={addedItem.imageUrl ? addedItem.imageUrl : logoDefault} alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-center sm:col-span-2 sm:mx-auto'>
                    <div className='text-xl text-black font-bold'>{addedItem.title}</div>
                    <div className='text-lg text-[#8D8D8D]'>{addedItem.types}, {addedItem.sizes} .</div>
                </div>
                <div className='flex justify-center items-center sm:justify-end sm:pr-3'>
                    <div onClick={() => minusAddItem(addedItem)} className={addItemStyle}>
                        <img className={addedItem.label > 1
                            ? 'absolute top-0 left-auto w-[50%] h-[100%]'
                            : 'absolute top-0 left-auto w-[50%] h-[100%]'} src={minus} alt="" />
                    </div>
                    <div className={`px-[12px] text-2xl font-bold`}>{addedItem.label}</div>
                    <div> <div onClick={() => plusAddItem(addedItem)} className={addItemStyle}>
                        <img className='absolute top-0 left-auto w-[50%] h-[100%]' src={plus} alt="" />
                    </div></div>
                </div>
                <div className='flex justify-center items-center text-2xl font-bold sm:justify-start sm:pl-3'>{(addedItem.price * addedItem.label).toFixed(2)} $</div>
                <div className='flex flex-col items-center justify-between gap-1'>
                    <div onClick={() => removeAddItem(addedItem.id)} className='w-[32px] h-[32px] rounded-full border-[#D7D7D7] border-solid relative cursor-pointer hover:border-[#979797]'>
                        <img className='absolute top-0 left-[7px] w-[40%] h-[100%]' src={kreuz} alt="" />
                    </div>
                    <button onClick={()=>deleteItem} className=' rounded-full w-full md:h-12
                        border-[#c6c6c6] border-solid px-1 cursor-pointer hover:border-[#979797]'>delete from back</button>
                </div>
            </div>
        </>
    )

}