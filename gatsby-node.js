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

  const buildWorks = path => {
    const component = resolve(`./src/templates/${path}.tsx`);

    result.data[path].edges.forEach(({ node: { id, frontmatter } }) => {
      const slug = frontmatter.title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/(-+)/g, '-');

      actions.createPage({ path: `${path}/${slug}`, component, context: { slug, id: id } });
      console.log(frontmatter.title);
    });
  };

  console.log('Building Contact page...');
  buildPage('contact');

  console.log('Building Writing page...');
  buildPage('writing');

  console.log('Building CV page...');
  buildPage('cv');

  console.log('\nBuilding Works pages');
  buildWorks('work');

  console.log('\n');
};
