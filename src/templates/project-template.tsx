import React from 'react';
import { graphql } from 'gatsby';
import Project from '../components/project';
import Main from '../components/main';

const ProjectTemplate = ({ data }: any) => {
    const project = data.projectsJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;
    const url = project.url;

    return (
        <Main>
            <Project title={title} description={description} imageData={imageData} url={url}></Project>
        </Main>
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