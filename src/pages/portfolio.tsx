import * as React from "react"
import GridLayout from '../components/layout.tsx'
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project preview.tsx';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.css"
import "../components/sidebar.tsx"
import Main from "../components/main.tsx";
import SideBar from "../components/sidebar.tsx";
import SideBarIcon from "../components/sidebar-icon.tsx";
import { IoHomeOutline, IoPersonOutline, IoReader } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";
import CollectionPreview from "../components/collection preview.tsx";

function App() {
  const data = useStaticQuery(graphql`
  {
    allPortfolioJson {
      edges {
        node {
          title
          slug
          splash
          thumbnail {
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


  const projects = data.allPortfolioJson.edges;

  return <div className="flex">
    {/* This is so website isn't zoomed in at the start */}
    <meta name="viewport" content="width=device-width"></meta>
    <title>Photography Portfolio Galleries</title>
    <SideBar>
      <div className="fixed top-[2.5%]">
        <Link to='/'>
          <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
        </Link>
        <Link to='/portfolio'>
          <SideBarIcon> <FaPhotoVideo size={20} /></SideBarIcon>
        </Link>
      </div>

    </SideBar>

    <div className="absolute left-[--sidebar-size] min-w-[--sidebar-offset]" id='landing'>
      <Main>

        <div id='projects' />
        <p className='px-4 h-auto pl-4 pr-4 py-24 m-[17.5%] bg-stone-500 my-auto text-3xl text-white bg-opacity-75 shadow-inner rounded-3xl text-center'>
          Galleries:
        </p>
        <GridLayout>
          <Link to="https://yvesm.darkroom.com" className="sm:size-fit md:w-1/2 h-2/6 pl-8 pr-16 py-32 text-white bg-stone-700 bg-opacity-75 shadow-2xl rounded-xl transition ease-in-out delay-100 hover:scale-105 hover:bg-opacity-100" >
            <div >
              <h2 className='text-2xl  font-bold'>
                You can buy prints of some of the work here.
              </h2>
            </div>
          </Link>
          {projects.map(({ node: project }: any) => {
            const title = project.title
            const slug = project.slug
            const splash = project.splash
            const imageData = project.thumbnail.childImageSharp.fluid;

            return (<CollectionPreview title={title} splash={splash} imageData={imageData} slug={slug} />)
          })}
        </GridLayout>
      </Main>
    </div>
  </div >
}

export default App
