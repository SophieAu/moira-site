/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Collage as strings } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './collage.module.css';

const Collage = () => {
  const [selectedImage, selectImage] = useState('');

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <div className={styles.collage}>
        <img src={imgOne} alt="rubbish" onClick={() => selectImage(imgOne)} />
        <img src={imgTwo} alt="rubbish" onClick={() => selectImage(imgTwo)} />
        <img src={imgThree} alt="rubbish" onClick={() => selectImage(imgThree)} />
        <img src={imgFour} alt="rubbish" onClick={() => selectImage(imgFour)} />
        <img src={imgFive} alt="rubbish" onClick={() => selectImage(imgFive)} />
        <img src={imgSix} alt="rubbish" onClick={() => selectImage(imgSix)} />
        <img src={imgSeven} alt="rubbish" onClick={() => selectImage(imgSeven)} />
        <img src={imgEight} alt="rubbish" onClick={() => selectImage(imgEight)} />
        {selectedImage && (
          <div className={styles.fullSize} onClick={() => selectImage('')}>
            <img src={selectedImage} alt="rubbish" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Collage;
