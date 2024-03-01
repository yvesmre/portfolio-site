import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'


const ProjectPreview = ({ title, slug, imageData, splash }: any) => (
    <div className="w-3/6 h-2/6 pl-8 pr-16 py-8 bg-gray-700 bg-opacity-75 shadow-2xl rounded-xl transition ease-in-out delay-100 hover:scale-105 hover:bg-opacity-100">
        <Link to={`/${slug}/`}> <Image fluid={imageData} className="w-2/4 h-auto mb-4 drop-shadow-2xl" /></Link>
        <h2 className='text-3xl text-white font-bold'>
            <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p className='text-gray-300 py-2 text-lg'> {splash} </p>
        <div className='bg-blue-500 w-40 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 '>
            <p className='p-2 pl-4 text-xl underline hover:text-green-400 text-gray-300 drop-shadow-[0_50px_50px_rgba(0,0,0,255)] '>
                <Link to={`/${slug}/`}>View project</Link>
            </p>
        </div>
    </div >
);

export default ProjectPreview