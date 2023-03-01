import React, { useState } from 'react';
import image01 from '../assets/image01.png';
import image11 from '../assets/image11.png';
import image69 from '../assets/image69.png';
import yb_120 from '../assets/yb_120m (166).png';
import yb_360 from '../assets/yb_360_385m6.png';
import yb_m10_54h from '../assets/yb_m10_54h.png';
import yb_m10_72h from '../assets/yb_m10_72h.png';
import yb_m12_60h from '../assets/yb_m12_60h.png';
import yb_m12_66h from '../assets/yb_m12_66h.png';
import hbs from '../assets/hbs_single_phase_ac_couple.png';
import hhs from '../assets/hhs_single_phase_hybrid.png';
import hht from '../assets/hht_three_phase_hybrid.png';
import hpk from '../assets/hpk_single_phase_1mppt.png';
import hps from '../assets/hps_single_phase_2mppts.png';
import hpt_2 from '../assets/hpt_three_phase_2mppts.png';
import hpt_4 from '../assets/hpt_three_phase_4mppts.png';
import image09 from '../assets/image09.png';

import styles from './Page.module.css';
import jsPDF from 'jspdf';

const inverterImage = {
  'hpk single phase 1mppt':hpk,
  'hps single phase 2 mppts':hps,
  'hpt three phase 2mppts':hpt_2,
  'hpt three phase 4mppts':hpt_4,
  'hhs single phase hybrid':hhs,
  'hbs single phase ac couple':hbs,
  'hht three phase hybrid':hht,
}


const solarPanelImage = {
  'yb 360-385m6':yb_360,
  'yb 120m (166)':yb_120,
  'yb m10/54h':yb_m10_54h,
  'yb m10/72h':yb_m10_72h,
  'yb m12/60h':yb_m12_60h,
  'yb m12/66h':yb_m12_66h,
}

const Page = () => {
  const [pvSystem, setPvSystem] = useState({
    numberOfMods: '',
    pvArea: '',
    power: '',
    annualPvProduction: '',
  });

  const [panel,setPanel] = useState('');
  const [inverter,setInverter] = useState('');

  const pvSystemHandler = (e) => {
    const { name, value } = e.target;
    setPvSystem((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const panelHandler = (e)=>{
    setPanel(e.target.value);
  }

  const inverterHandler = (e)=>{
    setInverter(e.target.value);
  }

  const generatePdf =()=>{
    var doc = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a2',
    });
    doc.html(document.querySelector('#main'),{
      callback:function(pdf){
        pdf.save('invoice.pdf');
      }
    })
  }

  // const generatePdf = () => {
  //   const pdf = new jsPDF();
  //   pdf.html(document.querySelector('#main'));
  //   pdf.save('testInvoice')

  // }



  return (
    <div id='main'>
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
      <div
        style={{
          backgroundColor: 'black',
          marginTop: -10,
          color: 'white',
          paddingBottom: 40,
        }}
      >
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
              paddingBottom: 40,
            }}
          >
            <h3>Nombre de modules :</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input
                className={styles.input02}
                onChange={pvSystemHandler}
                name='numberOfMods'
              />{' '}
              &nbsp;
              <h1 style={{ margin: 0 }}>panneaux</h1>
            </span>

            <h3>Surface PV :</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input
                className={styles.input02}
                onChange={pvSystemHandler}
                name='pvArea'
              />{' '}
              &nbsp;
              <h1 style={{ margin: 0 }}>m2 environ</h1>
            </span>

            <h3>Puissance installée:</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input
                className={styles.input02}
                onChange={pvSystemHandler}
                name='power'
              />{' '}
              &nbsp;
              <h1 style={{ margin: 0 }}>KWC</h1>
            </span>

            <h3>Production annuelle PV:</h3>
            <span style={{ display: 'flex', width: '100%' }}>
              <input
                className={styles.input02}
                onChange={pvSystemHandler}
                name='annualPvProduction'
              />{' '}
              &nbsp;
              <h1 style={{ margin: 0 }}>W + OU - 10%</h1>
            </span>
          </div>
          <div style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
            <label for='file-upload'>Uplaod Image:</label>
            <input type='file' id='file-upload' name='file-upload' />
          </div>
        </div>
      </div>

      {/* page-3 */}

      <div
        style={{ backgroundColor: 'black', marginTop: '0px', color: 'white' }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '-20px' }}
        >
          <div className={styles.line_02}></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div className={styles.line_02}></div>
        </div>
        <div style={{ paddingTop: '80px' }}>
          <h4>NOTRE OFFRE EN INJECTION:</h4>
          <h4>DETAIL TECHNIQUE SOLAIRE:</h4>
          <h4>
            PANNEAU SOLAIRE
            &nbsp;
            <select onChange={panelHandler}>
              <option value='select'>select</option>
              <option value='yb 360-385m6'>yb 360-385m6</option>
              <option value='yb 120m (166)'>yb 120m (166)</option>
              <option value='yb m10/54h'>yb m10/54h</option>
              <option value='yb m10/72h'>yb m10/72h</option>
              <option value='yb m12/60h'>yb m12/60h</option>
              <option value='yb m12/66h'>yb m12/66h</option>
            </select> &nbsp;
            X &nbsp;<span>{pvSystem.numberOfMods}</span>&nbsp; PCS ( À AFFINER
            SUIVANT CALEPINAGE)
          </h4>
          <h4>ONDULEUR &nbsp;
            <select onChange={inverterHandler}>
              <option value='select'>select</option>
              <option value='hpk single phase 1mppt'>hpk single phase 1mppt</option>
              <option value='hps single phase 2 mppts'>hps single phase 2 mppts</option>
              <option value='hpt three phase 2mppts'>hpt three phase 2mppts</option>
              <option value='hpt three phase 4mppts'>hpt three phase 4mppts</option>
              <option value='hhs single phase hybrid'>hhs single phase hybrid</option>
              <option value='hbs single phase ac couple'>hbs single phase ac couple</option>
              <option value='hht three phase hybrid'>hht three phase hybrid</option>
            </select> &nbsp; X &nbsp;<input/> PCS</h4>
          <ol style={{ listStyleType: 'disc', paddingLeft: '120px' }}>
            <li>SUPPORT VALIDE PAR ETN</li>
            <li>VISSERIE INOX ET SUPPORT INOX</li>
            <li>CÂBLAGE ÉLECTRIQUE ET RACCORDEMENT</li>
            <li>COFFRET AC/DC PAR TRANCHE DE 100 KW</li>
          </ol>
          <img
            src={image69}
            style={{
              width: '100%',
              height: '100%',
              paddingTop: '60px',
              paddingLeft: '60px',
              paddingRight: '60px',
            }}
          ></img>
        </div>
      </div>

      {/* page-4 */}

      <div style={{ backgroundColor: 'black', marginTop: -10, color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.line_02}></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div className={styles.line_02}></div>
        </div>

        <div className={styles.line_04}></div>
        <h1 style={{ marginLeft: '120px', marginTop: '-45px' }}>
          NOTRE OFFRE :
        </h1>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                marginRight: '20%',
              }}
            >
              SÉCURITÉ INDIVIDUELLE ET COLLECTIVE (Formation des équipes ,
              échafaudage, élévateur(s ), équipements individuels …
            </h4>
          </div>
          <div className={styles.div_08}>
          <input
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '140px',
            height: '30px',
            borderRadius: '12px'
          }} />&nbsp; € HT
          </div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                marginRight: '25%',
              }}
            >
              PANNEAUX : &nbsp;<span>{pvSystem.power}00</span>&nbsp;Wc soit {pvSystem.numberOfMods} &nbsp;
              Monocristallin 420 Wc (minimum) <input type="text"/> , garantie produit 25
              ans et rentabilité 84,8% à 25 ans éco participation comprise.
              Bilan carbone fournis.
            </h4>
          </div>
          <div className={styles.div_08}>
          <input
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '140px',
            height: '30px',
            borderRadius: '12px'
          }} />&nbsp; € HT
          </div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                marginRight: '30%',
              }}
            >
              POSE INTÉGRATION ''SIMPLIFÉE'' : sur toiture plate avec membrane
              bitumeuse <input type="text"/>m2 ( hors chemin technique)). Fourniture du système
              de fixation en fonction de la membrane (sous atec). Pose des plots
              par un étancheur à prévoir Montage des modules Assurance RC et
              décennale incluse fournie au début et fin de chan
            </h4>
          </div>
          <div className={styles.div_08}>
          <input
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '140px',
            height: '30px',
            borderRadius: '12px'
          }} />&nbsp; € HT
          </div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                marginRight: '30%',
              }}
            >
              ONDULEUR :{inverter} garanti 5 ans (10 ans avec
              notre contrat de maintenance), Suivi à distance et plateforme
              intégrée. Fourniture et pos e d'un TGBT photovoltaïque Liaison DC
              comprise. Équipotentialité comprise Coffret de protection
              électrique AC/DC, connectique et câblages
            </h4>
          </div>
          <div className={styles.div_08}>
          <input
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '140px',
            height: '30px',
            borderRadius: '12px'
          }} />&nbsp; € HT
          </div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: '20px',
                textAlign: 'left',
                marginRight: '30%',
              }}
            >
              FRAIS DE POSE ÉLECTRIQUE : Liais on AC comprise jusqu'à 80 m 3 X
              185 mm² + 1 x95 mm² alu assure une perte en ligne % sans tranchée
              AGCP dans coffret régie locale, note de calcul, validation bureau
              de contrôle SOCOTEC, CONSUEL, Attestation ENR comprise
            </h4>
          </div>
          <div className={styles.div_11}>
          <input
          style={{
            marginLeft: '20px',
            marginTop: '20px',
            width: '140px',
            height: '30px',
            borderRadius: '12px'
          }} />&nbsp; € HT
          </div>
        </div>
        <div className={styles.line_02}></div>

        <div style={{ marginTop: '150px' }}>
          <h4 style={{ marginLeft: '20px', marginRight: '20px' }}>
            Ce devis comprend le suivi et l'installation de votre projet jusqu'à
            la mise en service et 1 an après la visite de contrôle de la
            première année. Nos équipes auront accès aux données toute la durée
            du contrat de maintenance. Vous aurez la possibilité de le prolonger
            selon vos besoins.
          </h4>
        </div>
        <div
          style={{ flexDirection: 'row', display: 'flex', marginTop: '80px' }}
        >
          <div
            style={{
              backgroundColor: '#4FAF0B',
              height: '130px',
              width: '10px',
              marginLeft: '10%',
            }}
          ></div>
          <div
            style={{
              flexDirection: 'column',
              marginTop: '-15px',
              marginLeft: '20px',
            }}
          >
            <h3>PRIX TOTAL HT:</h3>
            <h3>PRIX TOTAL HT:</h3>
            <h3>PRIX TOTAL HT:</h3>
          </div>
          <div
            style={{
              backgroundColor: '#4FAF0B',
              height: '130px',
              width: '75%',
              position: 'absolute',
              right: '0px',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                marginTop: '5px',
                marginLeft: '20px',
                flexDirection: 'row',
              }}
            >
              <input />
              <h3 style={{ position: 'absolute', left: '200px', top: '-15px' }}>
                €
              </h3>
            </div>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
              <input />
              <h3 style={{ position: 'absolute', left: '200px', top: '30px' }}>
                €
              </h3>
            </div>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
              <input />
              <h3 style={{ position: 'absolute', left: '200px', top: '75px' }}>
                €
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        {solarPanelImage[panel] && <img style={{width:'100%'}} src={solarPanelImage[panel]} alt='solar-panel-image'/>}
        {inverterImage[inverter] && <img style={{width:'100%'}} src={inverterImage[inverter]} alt='inverter-image'/>}
      </div>
      <div style={{backgroundColor:'#1d1d1d', marginBottom:0,paddingBottom:100}}>
        <img src={image09} style={{width:'100%'}} />
        <h3
            style={{
              // display: 'flex',
              alignItems: 'center',
              color:'white',
              marginLeft:100
            }}
          >
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              type='text'
              className={styles.input}
              style={{ padding: '5px',width:'20%' }}
            ></input>
            <label htmlFor='phone'>Title:</label>
            <input
              id='title'
              type='text'
              className={styles.input}
              style={{ padding: '5px',width:'20%' }}
            ></input>
            <label htmlFor='phone'>Phone:</label>
            <input
              id='phone'
              type='text'
              className={styles.input}
              style={{ padding: '5px',width:'20%' }}
            ></input>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='text'
              className={styles.input}
              style={{ padding: '5px',width:'20%' }}
            ></input>
          </h3>
          <div>
            <button className={styles.downloadButton} onClick={generatePdf}>Download</button>
          </div>
         
      </div>
    </div>
  );
};

export default Page;
