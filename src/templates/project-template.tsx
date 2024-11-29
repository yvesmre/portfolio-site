import React from 'react';
import { Link, graphql } from 'gatsby';
import Project from '../components/project';
import Main from '../components/main';
import { IoHomeOutline } from 'react-icons/io5';
import SideBar from '../components/sidebar';
import SideBarIcon from '../components/sidebar-icon';
import { FaPhotoVideo } from 'react-icons/fa';

const ProjectTemplate = ({ data }: any) => {
    const project = data.projectsJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;
    const url = project.url;

    return (
        <div className=''>
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
            <div className='absolute left-[--sidebar-size] min-w-[--sidebar-offset]'>
                <Main>
                    <Project title={title} description={description} imageData={imageData} url={url}></Project>
                </Main>
            </div>
        </div>
    )

}


export const query = graphql`

    query ($slug: String!){
    projectsJson(slug: {eq: $slug}) {
        title
        description
        url
        image {
            childImageSharp{
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
   }`;

export default ProjectTemplate