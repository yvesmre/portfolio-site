import React from 'react';
import { Link, graphql } from 'gatsby';
import Portfolio from '../components/portfolio';
import Main from '../components/main';
import { IoHomeOutline } from 'react-icons/io5';
import SideBar from '../components/sidebar';
import SideBarIcon from '../components/sidebar-icon';
import { FaPhotoVideo } from 'react-icons/fa';
import Image from 'gatsby-image'
import GridLayout from '../components/layout';

const PortfolioTemplate = ({ data }: any) => {
    const project = data.portfolioJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.thumbnail.childImageSharp.fluid;
    const url = project.url;


    const images = data.allFile.edges;

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
                    <Portfolio title={title} description={description} imageData={imageData} url={url} />

                    <div id='gallery'>

                        <main className='flex flex-row  flex-wrap w-[100%] mx-[10%] [&>*:nth-child(2n)]:bg-stone-600 [&>*:nth-child(2n)]:bg-opacity-75
        [&>*:nth-child(2n-1)]:bg-stone-600 [&>*:nth-child(2n-1)]:bg-opacity-75 '  >
                            {images.map(({ node: image }: any) => {
                                console.log(image.childImageSharp.fluid)
                                return <div className="h-1/4 w-1/4 p-4 m-4 drop-shadow-2xl bg-gray-700 bg-opacity-75 rounded-3xl transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100">
                                    <Image fluid={image.childImageSharp.fluid} /> </div>
                            })}

                        </main>
                    </div>


                </Main>
            </div>
        </div>
    )

}


export const query = graphql`

    query ($slug: String!){
    portfolioJson(slug: {eq: $slug}) {
        title
        description
        url
        thumbnail {
            childImageSharp{
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }

    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: $slug}}) {
        edges {
            node {
                childImageSharp{
                    fluid {
                    ...GatsbyImageSharpFluid
                        }
            }
        }
    }
  }

   }`;


export default PortfolioTemplate