import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from 'gatsby-image'

function Profile() {

  const data = useStaticQuery(graphql`
    query {
        introJson {
          text
          introduction
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

  const text = data.introJson.text

  return <div id="profile">
    <main className='bg-stone-700 flex flex-col w-auto h-[auto] mx-32 mt-12 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl justify-center items-center'>
      <div className="scale-[90%]">
        <div className="bg-stone-800 rounded-3xl  p-8  mb-8 drop-shadow-2xl w-[67%]">
          <Image fluid={data.introJson.image.childImageSharp.fluid} className="drop-shadow-2xl" />
        </div>
        <p className='text-white'>
          <p className="pb-8 text-2xl font-bold">{data.introJson.introduction}</p>
          {data.introJson.text.map((text: any) => {
            console.log(text)
            return <p className="pb-8 text-xl">
              {text}
            </p>
          })}
        </p>
      </div>
    </main>
  </div>;
}


export default Profile;