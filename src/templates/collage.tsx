/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'linaria';
import React, { useState } from 'react';

import { Collage as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_DESKTOP, MEDIA_MOBILE } from '../styles';
import { CollageQuery, ImgData } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...collage
    }
  }
`;

const collage = css`
  display: grid;
  grid-gap: 1rem;
  align-self: center;

  & > img {
    width: 100%;
    object-fit: contain;
    height: auto;
  }

  ${MEDIA_DESKTOP} {
    --max: min(50vw, 1600px);
    --column-width: minmax(auto, calc(var(--max) / 3 - 2 * 5px));
    grid-template-columns: repeat(3, var(--column-width));
    padding-right: var(--small-margin);
  }

  ${MEDIA_MOBILE} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const listImg = css`
  margin: 1rem 0;
`;

const fullSizeContainer = css`
  position: absolute;
  background-color: #000000aa;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const fullSize = {
  maxWidth: '80vw',
  maxHeight: 'min(80vh, 2000px)',
  objectFit: 'contain',
  margin: '10vh 10vw',
};

const gatsbyImageWrapper = {
  width: '80vw',
  height: '80vh',
  padding: '10vh 10vw',
};

const listImage = (modulo: number, onSelect: (i: number) => void) => (root: ImgData, i: number) =>
  i % 3 === modulo && (
    <li key={i} onClick={() => onSelect(i)} className={listImg}>
      <Img fluid={root.image.preview.fluid} fadeIn={false} />
    </li>
  );

const Collage: React.FC<CollageQuery> = ({ data }) => {
  const { images } = data.markdownRemark.frontmatter;
  const [selectedImage, selectImage] = useState<number | undefined>(undefined);

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <div className={collage}>
        <ul>{images.map(listImage(0, selectImage))}</ul>
        <ul>{images.map(listImage(1, selectImage))}</ul>
        <ul>{images.map(listImage(2, selectImage))}</ul>
        {selectedImage !== undefined && (
          <div className={fullSizeContainer} onClick={() => selectImage(undefined)}>
            <Img
              imgStyle={fullSize}
              fixed={images[selectedImage].image.fullScreen.fixed}
              style={gatsbyImageWrapper}
              fadeIn={false}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collage;
