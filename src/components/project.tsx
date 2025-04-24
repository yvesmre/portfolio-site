import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import "../styles/global.css"
import { IoHomeOutline } from 'react-icons/io5';
import SideBarIcon from './sidebar-icon';
import SideBar from './sidebar';

function Project({ title, imageData, description, url }: any) {

    const descriptions = description.split('\n')

    return <div className="flex flex-col  justify-center items-center">


        <div className="text-white sm:text-4xl text-xl font-bold pb-8 pt-8">{title}</div>

        <div className="h-1/4 sm:w-1/4 w-[100%] p-4 sm:m-4 drop-shadow-2xl bg-gray-700 bg-opacity-75 rounded-3xl transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100">
            <p>  <Image fluid={imageData} /> </p>
        </div>

        {descriptions.map((desc: String) => { return <p className='text-center text-xl pt-2 pb-4 w-1/2 text-white'>{desc}</p> })}

        {url ? <div className='bg-blue-500 w-auto m-6 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 '>
            <p className='p-2 px-4 text-xl underline hover:text-green-400 text-gray-300 drop-shadow-[0_50px_50px_rgba(0,0,0,255)] '>
                <a href={`${url}`}>Visit project</a>
            </p>
        </div> : <div className='bg-blue-500 w-auto m-6 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 '>
            <p className='p-2 px-4 text-xl underline hover:text-green-400 text-gray-300 drop-shadow-[0_50px_50px_rgba(0,0,0,255)] '>
                No Link Available for this Project!
            </p>
        </div>}
    </div >
}

export default Project