import {useLocation } from "react-router-dom";
import { HeaderSumBlock } from "./HeaderSumBlock/HeaderSumBlock";
import { HeaderSearchBlock } from "./headerSearchBlock/HeaderSearchBlock";
import { HeaderLogoComp } from "./HeaderLogoComp";

export const HeaderComponent = () => {

    const headerSearchBl = ()=>location.pathname!=='/createSide' && location.pathname!=='/shopCart' &&  <HeaderSearchBlock />
    const location = useLocation();

    return (
        <>
            <div className="flex justify-between  items-center py-11 border-b border-[#f6f6f6] border-0 border-solid 
            md:flex-col md:gap-y-5 md:">
               <HeaderLogoComp/>
              {headerSearchBl()}
                <HeaderSumBlock />
            </div>
        </>
    )
}