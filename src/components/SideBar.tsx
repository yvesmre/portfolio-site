import React from "react";
import { IoPersonOutline, IoHomeOutline, IoReader } from "react-icons/io5"

function SideBar({ children }: { children: any }) {
    return <div className="fixed top-0 left-0 h-screen w-24 flex flex-col items-center bg-stone-900 shadow-2xl">
        {/* <div className="fixed top-[2.5%]">
            <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
        </div>
        {home_only == false &&
            <div className="fixed bottom-[5%] bg-gray-700 rounded-3xl bg-opacity-40">
                <SideBarIcon><IoPersonOutline size={25} /></SideBarIcon>
                <SideBarIcon><IoReader size={25} /></SideBarIcon>
            </div>
        } */}

        {children}
    </div >
};


export default SideBar;
