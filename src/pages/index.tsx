
import * as React from "react"
import GridLayout from '../components/layout.tsx'
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview.tsx';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.css"
import "../components/SideBar.tsx"
import Main from "../components/main.tsx";
import SideBar from "../components/SideBar.tsx";
import SideBarIcon from "../components/SideBarIcon.tsx";
import { IoHomeOutline, IoPersonOutline, IoReader } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";

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

  function handleClickScroll(target: string) {
    const element = document.getElementById(target);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="flex">
    <SideBar>
      <div className="fixed top-[2.5%]">
        <Link to='/'>
          <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
        </Link>
      </div>

      <div className="fixed bottom-[5%] w-16 bg-stone-700 rounded-3xl bg-opacity-40 flex flex-col items-center justify-center">
        <button onClick={() => handleClickScroll('profile')}>
          <SideBarIcon> <IoPersonOutline size={20} /></SideBarIcon>
        </button>
        <button onClick={() => handleClickScroll('projects')}>
          <SideBarIcon><IoReader size={20} /></SideBarIcon>
        </button>
        <button onClick={() => handleClickScroll('contact')}>
          <SideBarIcon><MdContactPhone size={20} /></SideBarIcon>
        </button>
      </div>
    </SideBar>
    <div className="absolute left-20">
      <div id="profile" />
      <Main>
        <main className='bg-stone-700 flex flex-row w-auto h-[36rem] mx-32 mt-16 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl'>
          <StaticImage src="../../data/images/icon.png" layout="constrained" alt="Me" width={500} className='absolute left-4 mt-5 drop-shadow-2xl' />
          <p className='absolute left-1/2 pt-16 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="absolute left-1/2 bottom-[12.5%] text-center text-white bg-blue-500 pl-2 pr-4 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 ">
          </div>
        </main>


        <div id='projects' />
        <GridLayout >
          <p className='px-4 h-auto py-16 m-[17.5%] bg-stone-800 my-auto text-3xl text-white bg-opacity-75 shadow-inner rounded-3xl'>
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

        <div id="contact" className="text-white bg-stone-700 flex flex-row h-[20rem] mx-40 mt-16 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl">

          <p className="p-16 text-2xl font-bold">
            Contact me:
          </p>
        </div>

      </Main>
    </div>
  </div >
}

export default App
