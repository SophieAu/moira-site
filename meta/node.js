/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);

exports.PAGES_QUERY = `
  {
  collage: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/collage/"}}) {
    edges {
      node {
        id
      }
    }
  }
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/contact/"}}) {
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
  writing: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/writing/"}}) {
    edges {
      node {
        id
      }
    }
  }
}
`;

exports.buildCollagePage = (nodes, createPage) => {
  const path = 'collage';
  const component = resolve(`./src/templates/collage.tsx`);

  nodes.forEach(({ node: { id } }) => createPage({ path, component, context: { id } }));
};

exports.buildContactPage = (nodes, createPage) => {
  const path = 'contact';
  const component = resolve(`./src/templates/contact.tsx`);

  nodes.forEach(({ node: { id } }) => createPage({ path, component, context: { id } }));
};

exports.buildTranslationPage = (nodes, createPage) => {
  const path = 'translation';
  const component = resolve(`./src/templates/translation.tsx`);

  nodes.forEach(({ node: { id } }) => createPage({ path, component, context: { id } }));
};

exports.buildWritingPage = (nodes, createPage) => {
  const path = 'writing';
  const component = resolve(`./src/templates/writing.tsx`);

  nodes.forEach(({ node: { id } }) => createPage({ path, component, context: { id } }));
};
