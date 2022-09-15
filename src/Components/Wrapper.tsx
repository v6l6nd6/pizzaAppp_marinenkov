import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import styles from './cssModule/wrapper.module.scss'
import { HeaderComponent } from "./headersComps/HeaderComponents"
import { MainComponent } from "./mainComponent/MainComponent"



export const ThemeContext: any = React.createContext<any>({} as any);

export const Wrapper = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <>

            <div className="">
                <div className="flex flex-col h-full font-body min-h-screen container mx-auto max-w-[1210px] px-3">
                    <ThemeContext.Provider value={{ searchValue, setSearchValue }}>
                        <header className={""}><HeaderComponent /></header>
                        <main className="flex-auto py-10">
                            <Outlet />
                        </main>
                    </ThemeContext.Provider>
                    <footer className={styles.footer}></footer>
                </div>
            </div>
        </>
    )
}