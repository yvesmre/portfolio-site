import React from "react";

function SideBar({ children }: { children: any }) {
    return <div className="fixed top-0 left-0 min-h-[100%] w-[--sidebar-size] flex flex-col items-center bg-stone-900 shadow-2xl">
        {children}
    </div >
};

export default SideBar;
