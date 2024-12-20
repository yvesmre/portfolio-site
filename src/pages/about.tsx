
import { IconText } from '../components/icon-text.tsx';

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
import { FaGithub, FaGithubSquare, FaLinkedin, FaPhotoVideo } from "react-icons/fa";
import Profile from '../components/intro.tsx';

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
    {/* This is so website isn't zoomed in at the start */}
    <meta name="viewport" content="width=device-width"></meta>
    <title>About</title>

    <SideBar>
      <div className="fixed top-[2.5%]">
        <Link to='/'>
          <SideBarIcon><IoHomeOutline size={25} /></SideBarIcon>
        </Link>
        <Link to='/portfolio'>
          <SideBarIcon> <FaPhotoVideo size={20} /></SideBarIcon>
        </Link>
      </div>

      <div className="fixed bottom-[5%] w-[4%] bg-stone-700 rounded-3xl bg-opacity-40 flex flex-col items-center justify-center">
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

    <div className="absolute left-[--sidebar-size] min-w-[--sidebar-offset]" id='landing'>
      <div className='bg-gradient-to-b from-emerald-950 to-blue-950 pt-1 w-[100%] h-auto min-h-[100dvh] pb-[8rem] '>

        <Landing />


      </div>
    </div>
  </div >
}

export default App

function Landing({ }) {
  return (<div className="m-24 w-auto h-[24rem] flex flex-col text-stone-50 bg-orange-400 rounded-3xl bg-opacity-20 justify-center items-center">
    <div className="scale-75">
      <p className=" text-4xl font-bold underline">About </p>
      <p className=" text-2xl">This website was written in TypeScript and JavaScript, using the <b>React</b> framework with <b>Gatsby</b> providing the backend static site generation and integration with <b>Github Pages</b>
        .</p>

      <p className='text-2xl underline'> View the source for this website on the <Link to='https://github.com/yvesmre/portfolio-site' className='hover:text-emerald-500 hover:scale-110 transition ease-in-out' >Github repository.</Link></p>
    </div>
  </div >);
}
