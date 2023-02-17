import React from "react";
import styles from "./Page.module.css";

const Page4 = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", marginTop: -10, color: "white" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.line_02}></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div className={styles.line_02}></div>
        </div>

        <div className={styles.line_04}></div>
        <h1 style={{ marginLeft: "120px", marginTop: "-45px" }}>
          NOTRE OFFRE :
        </h1>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: "20px",
                textAlign: "left",
                marginRight: "20%",
              }}
            >
              SÉCURITÉ INDIVIDUELLE ET COLLECTIVE (Formation des équipes ,
              échafaudage, élévateur(s ), équipements individuels …
            </h4>
          </div>
          <div className={styles.div_08}></div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: "20px",
                textAlign: "left",
                marginRight: "25%",
              }}
            >
              PANNEAUX : 142800 Wc soit 340 Monocristallin 420 Wc (minimum) YB
              GOL PRO , garantie produit 25 ans et rentabilité 84,8% à 25 ans
              éco participation comprise. Bilan carbone fournis.
            </h4>
          </div>
          <div className={styles.div_08}></div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: "20px",
                textAlign: "left",
                marginRight: "30%",
              }}
            >
              POSE INTÉGRATION ''SIMPLIFÉE'' : sur toiture plate avec membrane
              bitumeuse 678m2 ( hors chemin technique)). Fourniture du système
              de fixation en fonction de la membrane (sous atec). Pose des plots
              par un étancheur à prévoir Montage des modules Assurance RC et
              décennale incluse fournie au début et fin de chan
            </h4>
          </div>
          <div className={styles.div_08}></div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: "20px",
                textAlign: "left",
                marginRight: "30%",
              }}
            >
              ONDULEUR : HUAWEI SUN 2000 100TL M1 garanti 5 ans (10 ans avec
              notre contrat de maintenance), Suivi à distance et plateforme
              intégrée. Fourniture et pos e d'un TGBT photovoltaïque Liaison DC
              comprise. Équipotentialité comprise Coffret de protection
              électrique AC/DC, connectique et câblages
            </h4>
          </div>
          <div className={styles.div_08}></div>
        </div>
        <div className={styles.line_02}></div>
        <div className={styles.div_09}>
          <div className={styles.div_07}>
            <h4
              style={{
                marginLeft: "20px",
                textAlign: "left",
                marginRight: "30%",
              }}
            >
              FRAIS DE POSE ÉLECTRIQUE : Liais on AC comprise jusqu'à 80 m 3 X
              185 mm² + 1 x95 mm² alu assure une perte en ligne % sans tranchée
              AGCP dans coffret régie locale, note de calcul, validation bureau
              de contrôle SOCOTEC, CONSUEL, Attestation ENR comprise
            </h4>
          </div>
          <div className={styles.div_11}></div>
        </div>
        <div className={styles.line_02}></div>

        <div style={{ marginTop: "150px" }}>
          <h4 style={{ marginLeft: "20px", marginRight: "20px" }}>
            Ce devis comprend le suivi et l'installation de votre projet jusqu'à
            la mise en service et 1 an après la visite de contrôle de la
            première année. Nos équipes auront accès aux données toute la durée
            du contrat de maintenance. Vous aurez la possibilité de le prolonger
            selon vos besoins.
          </h4>
        </div>
        <div
          style={{ flexDirection: "row", display: "flex", marginTop: "80px" }}
        >
          <div
            style={{
              backgroundColor: "#4FAF0B",
              height: "130px",
              width: "10px",
              marginLeft: "10%",
            }}
          ></div>
          <div
            style={{
              flexDirection: "column",
              marginTop: "-15px",
              marginLeft: "20px",
            }}
          >
            <h3>PRIX TOTAL HT:</h3>
            <h3>PRIX TOTAL HT:</h3>
            <h3>PRIX TOTAL HT:</h3>
          </div>
          <div
            style={{
              backgroundColor: "#4FAF0B",
              height: "130px",
              width: "75%",
              position: "absolute",
              right: "0px",
              flexDirection: "column",
            }}
          >
            <div style={{ marginTop: "5px", marginLeft: "20px", flexDirection: "row" }}>
              <input />
              <h3 style={{position: "absolute", left: "200px", top:"-15px"}}>€</h3>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <input />
             <h3 style={{position: "absolute", left: "200px", top: "30px"}}>€</h3>
             
            </div>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <input />
              <h3 style={{position: "absolute", left: "200px", top: "75px"}}>€</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
