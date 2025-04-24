import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from 'gatsby-image'

function Activity() {

  const data = useStaticQuery(graphql`
    query {
        activityJson {
          date
          text
          image {
            childImageSharp
            {
              fluid
                {
              ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
   `);

  const text = data.activityJson.text

  return <div id="profile">
    <main className='bg-stone-700 flex flex-col w-auto h-[auto] sm:mx-32 mx-12 mt-12 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl justify-center items-center'>
      <div className="scale-[80%]">
        {/* <div className="bg-stone-800 rounded-3xl  p-8  mb-8 drop-shadow-2xl w-[67%]">
          <Image fluid={data.activityJson.image.childImageSharp.fluid} className="drop-shadow-2xl" />
        </div> */}
        <p className='text-white'>
        <p className="pb-12 text-4xl font-bold"> What am I currently up to? </p>
        <p className="pb-8 text-2xl underline"> {data.activityJson.date} </p>
          {data.activityJson.text.map((text: any) => {
            console.log(text)
            return <p className="pb-4 text-2xl">
              {text}
            </p>
          })}
        </p>
      </div>
    </main>
  </div>;
}


export default Activity;