import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'

const Project = ({ title, imageData, description, url }: any) => (
    <div className="flex flex-col justify-center items-center">
        <div className="h-1/4 w-1/4 p-4 m-4 drop-shadow-2xl bg-gray-700 bg-opacity-75 rounded-3xl transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100">
            <p>  <Image fluid={imageData} /> </p>
        </div>
        <p className='text-center text-xl pt-2 pb-4 w-1/2 text-white'>{description}</p> <div className='bg-blue-500 w-40 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 '>
            <p className='p-2 pl-6 text-xl underline hover:text-green-400 text-gray-300 drop-shadow-[0_50px_50px_rgba(0,0,0,255)] '>
                <Link to={`/${url}/`}>View project</Link>
            </p>
        </div>
    </div >
);

export default Project