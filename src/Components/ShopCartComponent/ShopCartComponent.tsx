import  { useEffect } from 'react';
import shopCart from '../../img/shopCart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './cartItem';
import { CartEmpty } from './CartEmpty';
import { clearShopCartAC } from '../../redux/redux-cart';


export const ShopCartComponent = () => {

    const dispatch = useDispatch();
    const sumAddItems = useSelector((store: RootState) => store.cardPizzaReducer.addItems);
    const totalPriceOfAI = useSelector((store: RootState) => Number(store.cardPizzaReducer.totalSum));
    const generalSum = sumAddItems.reduce((sum, itm) => { return sum + itm.label }, 0).toFixed(2);
    const backToOneSlide = useNavigate();


    useEffect(() => {

    }, [sumAddItems, totalPriceOfAI])
    const clearShopCart = () => {
        return dispatch(clearShopCartAC())
    }


    return (
        <>
            <div className='flex flex-col mx-auto container max-w-[1210px] min-h-screen p-[35px] font-body justify-start'>
                <div className='max-w-full h-full'>
                    <div className='flex h-screen max-w-[820px] flex-col mx-auto'>
                        {totalPriceOfAI === 0 ? <CartEmpty />
                            : <>
                                <div className='flex justify-between items-center pb-[30px] sm:flex-col'>
                                    <div className='flex items-center'>
                                        <div className='w-[28px] h-[25px]'>
                                            <img className='w-full h-full' src={shopCart} alt="" />
                                        </div>
                                        <div className='text-3xl font-bold ml-[18px]'>
                                            Shopping cart
                                        </div>
                                    </div>
                                    <div onClick={() => clearShopCart()} className='flex  items-center'>
                                        <div className='w-[18px] h-[20px]'>
                                            <img className='w-full h-full ' src={shopCart} alt="" />
                                        </div>
                                        <div className='font-normal text-base text-gray-400 ml-[15px]'>Empty the trash</div>
                                    </div>
                                </div>

                                <div className='flex-auto min-h-[200px] flex flex-col'>
                                    {sumAddItems.map((addedItem: any) =>
                                        <CartItem addedItem={addedItem} key={addedItem.id} />
                                    )}
                                </div>

                                <div className='grid grid-cols-2 grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 sm:gap-y-[10px]'>
                                    <div className='w-full h-full flex justify-start sm:justify-center'>
                                        <div className='text-xl'>
                                            Total pizzas <span className='text-2xl font-bold'>{generalSum} .</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex justify-end sm:justify-center'>
                                        <div className='text-xl'>
                                            Order amount <span className='text-2xl font-bold'>{totalPriceOfAI} $</span>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex justify-start sm:justify-center'>
                                        <div onClick={() => backToOneSlide(-1)} className='w-[210px] h-[55px] border-1 border-gray-300 border-solid rounded-full flex justify-center items-center text-base font-bold hover:bg-[#D7D7D7] cursor-pointer'>
                                            go back
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex justify-end sm:justify-center '>
                                        <div className='w-[210px] h-[55px] bg-[#D7D7D7] rounded-full flex justify-center items-center text-base font-bold hover:bg-[#d7d7d799] cursor-pointer' >
                                            pay now
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}