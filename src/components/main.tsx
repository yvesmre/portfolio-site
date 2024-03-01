import { Link } from 'gatsby';
import *  as React from 'react';
import "../styles/global.css"

function Main({ children }: any) {
    return <React.Fragment>
        <div className='bg-gradient-to-b from-green-600 to-blue-900 pb-32 w-screen'>
            <header className='w-screen bg-gradient-to-r from-blue-900 to-blue-950 p-4 text-white text-2xl drop-shadow-2xl rounded-b-xl'>
                <Link to="/">Home</Link>
            </header>

            <div>
                {children}
            </div>
        </div>
    </React.Fragment>

};

export default Main