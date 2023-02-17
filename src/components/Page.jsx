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
      <div style={{ backgroundColor: 'black', marginTop: -10, color: 'white',paddingBottom:40 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.line_02}></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div className={styles.line_02}></div>
        </div>
        <h2>LE DIMENSIONNEMENT DE VOS FUTURES INSTALLATIONS SOLAIRES</h2>
        <br />
        <h2 style={{ fontWeight: 200 }}>TYPE D'INSTALLATION PV</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: 'rgb(79, 175, 11)',
              width: '40%',
              marginLeft: '10%',
              paddingLeft: 20,
              paddingBottom:40
            }}
          >
            <h3>Nombre de modules :</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input className={styles.input02} /> &nbsp;
              <h1 style={{ margin: 0 }}>panneaux</h1>
            </span>

            <h3>Surface PV :</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input className={styles.input02} /> &nbsp;
              <h1 style={{ margin: 0 }}>m2 environ</h1>
            </span>

            <h3>Puissance installée:</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input className={styles.input02} /> &nbsp;
              <h1 style={{ margin: 0 }}>KWC</h1>
            </span>

            <h3>Production annuelle PV:</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input className={styles.input02} /> &nbsp;
              <h1 style={{ margin: 0 }}>W + OU - 10%</h1>
            </span>
          </div>
          <div style={{ width: '40%',display:'flex',alignItems:'center' }}>
          <label for="file-upload">Uplaod Image:</label>
          <input type="file" id="file-upload" name="file-upload"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
