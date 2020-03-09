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
import { CollageQuery } from '../types';

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
    --column-width: minmax(auto, calc(50vw / 3 - 2 * 5px));
    grid-template-columns: repeat(3, var(--column-width));
    padding-right: var(--small-margin);
  }

  ${MEDIA_MOBILE} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const fullSize = css`
  position: absolute;
  background-color: #000000aa;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }
`;

const Collage: React.FC<CollageQuery> = ({ data }) => {
  const { images } = data.markdownRemark.frontmatter;
  const [selectedImage, selectImage] = useState<number | undefined>(undefined);

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <div className={collage}>
        <ul>
          {images.map(({ image }, i) => (
            <li key={i} onClick={() => selectImage(i)}>
              <Img fixed={image.childImageSharp.fixed} />
            </li>
          ))}
        </ul>
        {selectedImage !== undefined && (
          <div className={fullSize} onClick={() => selectImage(undefined)}>
            <Img fixed={images[selectedImage].image.childImageSharp.fixed} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collage;
