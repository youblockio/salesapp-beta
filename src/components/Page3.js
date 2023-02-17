import React from "react";
import image69 from "../assets/image69.png"
import styles from "./Page.module.css";

const Page3 = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "black", marginTop: "0px", color: "white" }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-20px" }}
        >
          <div className={styles.line_02}></div>
          <div>
            <h2>VOTRE PROJET PHOTOVOLTAIQUE</h2>
          </div>
          <div className={styles.line_02}></div>
        </div>
        <div style={{ paddingTop: "80px" }}>
          <h4>NOTRE OFFRE EN INJECTION:</h4>
          <h4>DETAIL TECHNIQUE SOLAIRE:</h4>
          <h4>
            PANNEAU SOLAIRE GCL 420W X 340 PCS ( À AFFINER SUIVANT CALEPINAGE)
          </h4>
          <h4>ONDULEUR HUAWEI 100 KW X 2 PCS</h4>
          <ol style={{ listStyleType: "disc", paddingLeft: "120px" }}>
            <li>SUPPORT VALIDE PAR ETN</li>
            <li>VISSERIE INOX ET SUPPORT INOX</li>
            <li>CÂBLAGE ÉLECTRIQUE ET RACCORDEMENT</li>
            <li>COFFRET AC/DC PAR TRANCHE DE 100 KW</li>
          </ol>
          <img src={image69} style={{ width: "100%", height: "100%", paddingTop: "60px", paddingLeft: "60px", paddingRight:"60px"}}></img>
        </div>
      </div>
    </>
  );
};

export default Page3;
