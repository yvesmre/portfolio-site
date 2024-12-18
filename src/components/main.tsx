import { Link } from 'gatsby';
import *  as React from 'react';
import "../styles/global.css"
import { FaGithub } from "react-icons/fa";
import IconText from './icon-text';

function Main({ children }: any) {
    return <React.Fragment>
        <div className='bg-gradient-to-b from-emerald-950 to-blue-950 pt-1 w-[100%] h-auto min-h-[100dvh] pb-[8rem] '>

            <div>
                {children}
            </div>

            <Footer />
        </div>
    </React.Fragment>

};


function Footer() {
    return (<div className="absolute bottom-0 flex flex-col w-[100%] h-[8rem] bg-black bg-opacity-5 text-white justify-center items-center">
        <Link to='/about'> <p className='text-lg pb-4 font-bold underline hover:text-emerald-500 hover:scale-110 transition ease-in-out'> About </p> </Link>
        <IconText>
            <Link to='https://github.com/yvesmre/portfolio-site'>
                <FaGithub size={30} /></Link>
        </IconText>
    </div>);
}
export default Main