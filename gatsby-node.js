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

  const portfolio_results = await graphql(`
    {
      allPortfolioJson {
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

  portfolio_results.data.allPortfolioJson.edges.forEach(
    ({ node: portfolio }) => {
      const slug = portfolio.slug;
      createPage({
        path: `/${slug}/`,
        component: require.resolve("./src/templates/portfolio-template.tsx"),
        context: { slug: portfolio.slug },
      });
    }
  );
};
