import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import "../styles/global.css"
import { IoHomeOutline } from 'react-icons/io5';
import SideBarIcon from './sidebar-icon';
import SideBar from './sidebar';

const Portfolio = ({ title, imageData, description, url }: any) => (
    <div className="flex flex-col  justify-center items-center">
        <div className="h-1/4 w-1/4 p-1 m-4 drop-shadow-2xl bg-gray-100 bg-opacity-75 transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100">
            <p>  <Image fluid={imageData} /> </p>
        </div>
        <p className='text-center text-xl pt-4 pb-4 w-1/2 text-white'>{description}</p>
    </div >
);

export default Portfolio