
import * as React from "react"
import GridLayout from '../components/layout.tsx'
import { Link, graphql, useStaticQuery } from 'gatsby';
import ProjectPreview from '../components/project-preview.tsx';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.css"
import "../components/sidebar.tsx"
import Main from "../components/main.tsx";
import SideBar from "../components/sidebar.tsx";
import SideBarIcon from "../components/sidebar-icon.tsx";
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
        <button onClick={() => handleClickScroll('landing')}>
          <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
        </button>
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

    <div className="absolute left-20" id='landing'> {/* TODO: Terrible way of doing this ,change later*/}
      <Main>

        <Landing />

        <Profile />


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

function Landing({ }) {
  return (<div className="m-24 w-auto h-[32rem] flex flex-col text-stone-50 bg-orange-400 rounded-3xl bg-opacity-20 justify-center items-center">
    <p className=" text-3xl font-bold">Hi, welcome to my website.</p>
    <p className=" text-1xl">Site is still under construction, but feel free to click the buttons in the sidebar to find out more about me!</p>
  </div>);
}

function Profile({ }) {
  return (<><div id="profile" />
    <main className='bg-stone-700 flex flex-row w-auto h-[38rem] mx-32 mt-12 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl'>
      <StaticImage src="../../data/images/icon.png" layout="constrained" alt="Me" className='absolute left-4 mt-5 drop-shadow-2xl w-[45%] h-auto' />
      <p className='absolute left-1/2 pt-16 text-white w-1/2 pr-8'>

        <p className="pb-8 text-xl font-bold">I'm Yves Miguel Reyes</p>
        <p className="pb-8 ">
          I am a graduate from the University of Western Australia, majoring in Computer Science.
        </p>
        <p className="pb-8 ">
          I've built various things, from websites to scripts.
          I can program in C, C#, Java, Scala, Python and Lua.
        </p>
      </p>

      <div className="absolute left-1/2 bottom-[12.5%] text-center text-white bg-blue-500 pl-2 pr-4 rounded-full transition ease-in-out delay-50 hover:scale-105 hover:bg-opacity-100 ">
      </div>
    </main></>);
}
