/* eslint-disable @typescript-eslint/no-var-requires */
const {
  PAGES_QUERY,
  buildContactPage,
  buildCollagePage,
  buildTranslationPage,
  buildWritingPage,
} = require('./meta/node');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(PAGES_QUERY);
  if (result.errors) {
    console.error(`Error while running GraphQL query.`);
    return;
  }

  console.log('\nBuilding Collage Page...');
  buildCollagePage(result.data.collage.edges, actions.createPage);

  console.log('Building Contact Page...');
  buildContactPage(result.data.contact.edges, actions.createPage);

  console.log('Building Translation Page...');
  buildTranslationPage(result.data.translation.edges, actions.createPage);

  console.log('Building Writing page...\n');
  buildWritingPage(result.data.writing.edges, actions.createPage);
};
