const { resolve } = require(`path`);

const PAGES_QUERY = `
  {
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/contact/"}}) {
    edges {
      node {
        id
      }
    }
  }
  cv: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/cv/"}}) {
    edges {
      node {
        id
      }
    }
  }
  writing: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/works/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          isSubpage
        }
      }
    }
  }
  artwork: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/artwork/"}}) {
    edges {
      node {
        id
      }
    }
  }
  translation: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/translation/"}}) {
    edges {
      node {
        id
      }
    }
  }
  news: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/news/"}}) {
    edges {
      node {
        id
      }
    }
  }
}
`;

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) {
    console.error(`Error while running GraphQL query.`);
    return;
  }

  const buildPage = (path: string) => {
    const component = resolve(`./src/templates/${path}.tsx`);

    result.data[path].edges.forEach(({ node: { id } }) =>
      actions.createPage({ path, component, context: { id } })
    );
  };

  console.log('Building Contact page...');
  buildPage('contact');

  console.log('Building CV page...');
  buildPage('cv');

  console.log('Building Writing page...');
  buildPage('writing');

  console.log('Building Artwork page...');
  buildPage('artwork');

  console.log('Building News page...');
  buildPage('news');

  console.log('Building Translation page...');
  buildPage('translation');

  console.log('\n');
};
