import React from 'react';
import image01 from '../assets/image01.png';
import image11 from '../assets/image11.png';

import styles from './Page.module.css';

const Page = () => {
  return (
    <>
      <div>
        <img src={image01} className={styles.image_01}></img>
        <div className={styles.input_01}>
          <h2>FOURNITURE ET INSTALLATION D'UNE CENTRALE PHOTOVOLTAIQUE</h2>
          <div
            style={{
              backgroundColor: 'white',
              height: '5px',
              width: '350px',
              marginLeft: '100px',
            }}
          ></div>
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            MAÎTRE D'OUVRAGE : &nbsp;{' '}
            <input
              type='text'
              className={styles.input}
              style={{ padding: '5px' }}
            ></input>
          </h2>
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              className={styles.input}
              placeholder='Input Address'
              type='text'
              style={{ padding: '5px', width: '200px' }}
            ></input>
          </h2>
        </div>

        <img src={image11} className={styles.image_11}></img>
      </div>
      <div style={{ backgroundColor: 'black', marginTop: -10,color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className={styles.line_02}
          ></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div
            className={styles.line_02}
          ></div>
        </div>
        <h2>LE DIMENSIONNEMENT DE VOS FUTURES INSTALLATIONS SOLAIRES</h2>
        <br/>
        <h2 style={{fontWeight:200}}>TYPE D'INSTALLATION PV</h2>
      </div>
    </>
  );
};

export default Page;
