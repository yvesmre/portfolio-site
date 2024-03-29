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
    <main className='bg-stone-700 flex flex-row w-auto h-[38rem] mx-32 mt-12 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl'>
      <div className="bg-stone-800 rounded-3xl absolute top-[6%] p-8 m-4 drop-shadow-2xl w-[45%] h-auto">
        <Image fluid={data.introJson.image.childImageSharp.fluid} className="drop-shadow-2xl" />
      </div>
      <p className='absolute left-1/2 pt-16 text-white w-1/2 pr-8'>
        <p className="pb-8 text-xl font-bold">{data.introJson.introduction}</p>
        {data.introJson.text.map((text: any) => {
          console.log(text)
          return <p className="pb-8">
            {text}
          </p>
        })}
      </p>
    </main>
  </div>;
}


export default Profile;