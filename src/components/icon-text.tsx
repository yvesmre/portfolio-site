import React from "react";


export function IconText({
    children,
    text
}: any) {
    return <div className="hover:text-emerald-500 hover:scale-110 transition ease-in-out px-4 flex flex-col justify-center items-center">
        <p>

            {children}
        </p>
        <p>{text}</p>
    </div>;
}


export default IconText