import logo from '../../img/bird-svg.svg'


export const HeaderLogoComp = () => {

    return (
        <>
            <div className="w-[270px] flex items-center">
                <div className={"max-w-[64px] max-h-[64px]  mr-4"}>
                    <img className="w-full h-full rounded-[100%] bg-[#dfdfdf] object-center" src={logo} alt="" />
                </div>
                <div className={""}>
                    <div className={"font-black text-[26px] leading-[60%]"}>REACT PIZZA</div>
                    <div className={"font-normal text-base text-[#7B7B7B]"}>самая вкусная пицца во вселенной</div>
                </div>
            </div>
        </>
    )
}