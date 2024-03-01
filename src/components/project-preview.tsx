import { ViewButton } from './view-button';
import React from 'react'
import { Link } from 'gatsby';
import Image from 'gatsby-image'


const ProjectPreview = ({ title, slug, imageData, splash }: any) => (
    <div className="w-3/6 h-2/6 pl-8 pr-16 py-8 bg-stone-700 bg-opacity-75 shadow-2xl rounded-xl transition ease-in-out delay-100 hover:scale-105 hover:bg-opacity-100">
        <Link to={`/${slug}/`}> <Image fluid={imageData} className="w-2/4 h-auto mb-4 drop-shadow-2xl" /></Link>
        <h2 className='text-2xl text-white font-bold'>
            <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p className='text-stone-200 py-2 text-md'> {splash} </p>
        <ViewButton slug={slug} text={"View Project"} />
    </div >
);


export default ProjectPreview