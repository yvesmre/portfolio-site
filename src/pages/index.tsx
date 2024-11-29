
import { IconText } from './../components/icon-text';

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

        <div id="contact" className="text-white bg-stone-700 flex flex-col h-[20rem] mx-40 mt-16 mb-16 relative bg-opacity-80 shadow-2xl rounded-xl justify-center items-center">


          <p className="p-4 text-3xl font-bold underline">
            Contact:
          </p>
          <div className="flex flex-row justify-center items-center">
            <IconText text='LinkedIn'>
              <Link to='https://www.linkedin.com/in/yves-miguel-reyes-051667234/'>
                <FaLinkedin size={40} />
              </Link>
            </IconText>

            <IconText text='Github'>
              <Link to='https://github.com/yvesmre'>
                <FaGithubSquare size={40} />
              </Link>
            </IconText>
          </div>
        </div>

      </Main>
    </div>
  </div >
}

export default App

function Landing({ }) {
  return (<div className="m-24 w-auto h-[24rem] flex flex-col text-stone-50 bg-orange-400 rounded-3xl bg-opacity-20 justify-center items-center">
    <div className="scale-75">
      <p className=" text-4xl font-bold">Hi, welcome to my website.</p>
      <p className=" text-2xl">Site is still under construction, but feel free to click the buttons in the sidebar to find out more about me!</p>
    </div>
  </div>);
}
