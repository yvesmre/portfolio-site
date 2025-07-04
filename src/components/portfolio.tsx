import React from 'react';
import Image from 'gatsby-image';
import "../styles/global.css";
import { GatsbyImage } from 'gatsby-plugin-image';




function Portfolio({ title, imageData, description, url }: any) {

    const descriptions = description.split('\n')

    return <div className="flex flex-col  justify-center items-center">

        <div className="text-white sm:text-4xl text-xl font-bold pb-8 pt-8">{title}</div>
        <div className="h-1/3 sm:w-1/3 p-1 m-4 drop-shadow-2xl bg-gray-100 bg-opacity-75 transition ease-in-out delay-100 md:hover:scale-110 md:hover:bg-opacity-100">
            <p>  <GatsbyImage image={imageData} alt={'header image'} /> </p>
        </div>

        {descriptions.map((desc: String) => {
            return <p className='text-center text-xl pt-4 pb-4 w-1/2 text-white'>
                {desc}
            </p>
        })}
    </div >
}

export default Portfolio