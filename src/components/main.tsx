import { Link } from 'gatsby';
import *  as React from 'react';
import "../styles/global.css"
import { FaGithub } from "react-icons/fa";

function Main({ children }: any) {
    return <React.Fragment>
        <div className='bg-gradient-to-b from-emerald-950 to-blue-950 pt-1 w-[100%] h-[100%]'>

            <div>
                {children}
            </div>

            <Footer />
        </div>
    </React.Fragment>

};


function Footer() {
    return (<div className="flex flex-col w-[100%] h-[8rem] bg-black bg-opacity-5 text-white justify-center items-center">
        <p className='text-xl pb-4 font-bold underline'> About </p>
        <p className="hover:text-emerald-500"> <Link to='https://github.com/yvesmre/portfolio-site'><FaGithub size={35} /></Link> </p>
    </div>);
}
export default Main