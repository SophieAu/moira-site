/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

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

  console.log('Building Contact page...');
  buildPage('contact');

  console.log('Building CV page...');
  buildPage('cv');

  console.log('Building Writing page...');
  buildPage('writing');

  console.log('Building Collages page...');
  buildPage('collage');

  console.log('Building News page...');
  buildPage('news');

  console.log('Building Translation page...');
  buildPage('translation');

  console.log('\n');
};
