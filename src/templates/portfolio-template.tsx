import React from 'react';
import { Link, graphql } from 'gatsby';
import Portfolio from '../components/portfolio';
import Main from '../components/main';
import { IoHomeOutline } from 'react-icons/io5';
import SideBar from '../components/sidebar';
import SideBarIcon from '../components/sidebar-icon';
import { FaPhotoVideo } from 'react-icons/fa';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';

const PortfolioTemplate = ({ data }: any) => {
    const project = data.portfolioJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.thumbnail.childImageSharp.gatsbyImageData;
    const url = project.url;

    const images = data.allFile.edges;

    return (
        <div className=''>
            <title>{title}</title>
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

                        <main className='flex flex-row  flex-wrap w-[100%] sm:mx-[10%]'  >
                            {images.map(({ node: image }: any) => {
                                // console.log(image.childImageSharp.fluid)
                                return <div className="h-1/4 sm:w-1/4 min-w-56 sm:ml-0 p-2 m-4 drop-shadow-2xl bg-gray-300 bg-opacity-75 transition ease-in-out delay-100 hover:scale-110 hover:bg-opacity-100">
                                    <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={'Body image'} /> </div>
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
        splash
        url
        thumbnail {
            childImageSharp{
                gatsbyImageData (
                    placeholder: BLURRED
                    formats: [AUTO]
                )
            }
        }
    }

    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: $slug}}, sort: {name:ASC}) {
        edges {
            node {
                name
                childImageSharp{
                    gatsbyImageData (
                    placeholder: BLURRED
                    formats: [AUTO]
                    )
            }
        }
    }
  }

   }`;


export default PortfolioTemplate

export const Head = ({ data }: any) => {

    const project = data.portfolioJson;
    const title = project.title;
    const splash = project.splash;
    const imageData = project.thumbnail;

    const src = getSrc(imageData)
    const url = project.url;

    const images = data.allFile.edges;

    return <>
        <title>{title}</title>
        <meta name="description" content={splash} />
        <meta property="og:image" content={src} />
        <meta name="twitter:image" content={src} />
        <meta itemProp='image' content={src} />
    </>
}