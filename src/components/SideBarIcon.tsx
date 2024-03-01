import React from "react";


function SideBarIcon({ children }: any) {
    return <div className="text-white bg-gray-700 w-auto p-4 h-auto flex justify-center items-center m-8 rounded-xl bg-opacity-40 transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100 ">
        {children}
    </div>
}

export default SideBarIcon;