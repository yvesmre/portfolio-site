import { Link } from 'gatsby';
import *  as React from 'react';
import "../styles/global.css"

function Main({ children }: any) {
    return <React.Fragment>
        <div className='bg-gradient-to-b from-green-950 to-blue-950 pb-32 p-1 w-[100%] h-[100%]'>
            <div>
                {children}
            </div>
        </div>
    </React.Fragment>

};

export default Main