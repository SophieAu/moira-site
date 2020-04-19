/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require(`path`);
const { PAGES_QUERY } = require('./meta/node');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) {
    console.error(`Error while running GraphQL query.`);
    return;
  }

  const buildPage = path => {
    const component = resolve(`./src/templates/${path}.tsx`);

    result.data[path].edges.forEach(({ node: { id } }) =>
      actions.createPage({ path, component, context: { id } })
    );
  };

  console.log('Building Contact Page...');
  buildPage('contact');

  console.log('Building Translation Page...');
  buildPage('translation');

  console.log('Building Writing page...\n');
  buildPage('writing');
};
