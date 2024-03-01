exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const results = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (results.error) {
    reporter.panic("Something failed!");

    return;
  }

  // const projects = result.data.allProjectsJson.edges;

  results.data.allProjectsJson.edges.forEach(({ node: project }) => {
    const slug = project.slug;
    createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project-template.tsx"),
      context: { slug: project.slug },
    });
  });
};
