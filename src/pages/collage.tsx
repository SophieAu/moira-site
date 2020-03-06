/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from 'linaria';
import React, { useState } from 'react';

import { Collage as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_DESKTOP, MEDIA_MOBILE } from '../styles';

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

const Collage = () => {
  const [selectedImage, selectImage] = useState('');

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <div className={collage}>
        <img src={imgOne} alt="rubbish" onClick={() => selectImage(imgOne)} />
        <img src={imgTwo} alt="rubbish" onClick={() => selectImage(imgTwo)} />
        <img src={imgThree} alt="rubbish" onClick={() => selectImage(imgThree)} />
        <img src={imgFour} alt="rubbish" onClick={() => selectImage(imgFour)} />
        <img src={imgFive} alt="rubbish" onClick={() => selectImage(imgFive)} />
        <img src={imgSix} alt="rubbish" onClick={() => selectImage(imgSix)} />
        <img src={imgSeven} alt="rubbish" onClick={() => selectImage(imgSeven)} />
        <img src={imgEight} alt="rubbish" onClick={() => selectImage(imgEight)} />
        {selectedImage && (
          <div className={fullSize} onClick={() => selectImage('')}>
            <img src={selectedImage} alt="rubbish" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collage;
