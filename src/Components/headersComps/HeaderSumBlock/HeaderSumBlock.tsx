import cardshopLogo from "../../../img/cardShop.svg"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-store";
import { Link } from "react-router-dom";
import dollarIcon from "../../../img/dollarIcon.svg"


export const HeaderSumBlock = () => {

    const totalSum = useSelector((state: RootState) => state.cardPizzaReducer.totalSum);
    const sumAddItems: any = useSelector((state: RootState) => state.cardPizzaReducer.addItems);
    const generalSum = sumAddItems.reduce((sum: any, itm: any) => { return sum + itm.label }, 0);
    return (
        <>
            <Link to={'/shopCart'} className={'h-[50px] flex justify-end'}>
                <div className={"flex bg-[#dfdfdf] text-base items-center justify-center transition duration-400 px-2 py-4 rounded-[30px] text-black font-bold hover:bg-[#c2c2c2]"}>
                    <div className="flex items-center justify-center min-w-[65px] " >
                        <div className="relative w-5 h-5 my-auto ">
                            <img className="absolute top-0 left-0 w-full h-full" src={dollarIcon} alt="" />
                        </div>
                        <div className="pl-1">{totalSum}</div>
                    </div>
                    <div className="flex justify-center items-center min-w-[65px]" >
                        <div className="relative w-5 h-5 mr-1" >
                            <img className="absolute top-0 left-0 w-full h-full" src={cardshopLogo} alt="" />
                        </div>
                        <div>{generalSum}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}