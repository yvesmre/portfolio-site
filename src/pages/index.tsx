
import * as React from "react"
import GridLayout from '../components/layout.tsx'
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview.tsx';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.css"

import Main from "../components/main.tsx";

function App() {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          slug
          splash
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`);

  const projects = data.allProjectsJson.edges;

  return <html>
    <header> <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
    </style>
    </header>

    <Main>

      <main className='bg-gray-700 flex flex-row w-auto h-96 mx-72 relative bg-opacity-80 shadow-2xl rounded-xl my-4'>
        <StaticImage src="../../data/images/icon.png" layout="constrained" alt="Me" className='absolute left-4 w-2/5 mt-5 drop-shadow-2xl' />
        <p className='absolute left-1/2 py-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>

      <GridLayout>
        <p className='px-4 h-auto py-16 m-[17.975%] bg-gray-800 my-auto text-3xl text-white bg-opacity-75 shadow-inner rounded-3xl'>
          Projects:
        </p>
        {projects.map(({ node: project }: any) => {
          const title = project.title
          const slug = project.slug
          const splash = project.splash
          const imageData = project.image.childImageSharp.fluid;

          return (<ProjectPreview title={title} splash={splash} imageData={imageData} slug={slug} />)
        })}
      </GridLayout>
    </Main>

  </html>
}

export default App
