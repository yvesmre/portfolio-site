import React from 'react'
import { Link } from 'gatsby';

export function ViewButton({ slug, text }: { slug: any; text: string; }) {
    return <div className='bg-blue-500 w-[8.5rem] rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 '>
        <p className='py-2 pl-4 underline hover:text-emerald-400 text-stone-300 drop-shadow-[0_50px_50px_rgba(0,0,0,255)] '>
            <Link to={`/${slug}/`}>{text}</Link>
        </p>
    </div>;
}
