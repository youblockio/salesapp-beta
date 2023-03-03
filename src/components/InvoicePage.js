import React, { useState } from "react";
import image01 from "../assets/image01.png";
import image11 from "../assets/image11.png";
import image69 from "../assets/image69.png";
import yb_120 from "../assets/yb_120m (166).png";
import yb_360 from "../assets/yb_360_385m6.png";
import yb_m10_54h from "../assets/yb_m10_54h.png";
import yb_m10_72h from "../assets/yb_m10_72h.png";
import yb_m12_60h from "../assets/yb_m12_60h.png";
import yb_m12_66h from "../assets/yb_m12_66h.png";
import hbs from "../assets/hbs_single_phase_ac_couple.png";
import hhs from "../assets/hhs_single_phase_hybrid.png";
import hht from "../assets/hht_three_phase_hybrid.png";
import hpk from "../assets/hpk_single_phase_1mppt.png";
import hps from "../assets/hps_single_phase_2mppts.png";
import hpt_2 from "../assets/hpt_three_phase_2mppts.png";
import hpt_4 from "../assets/hpt_three_phase_4mppts.png";
import image09 from "../assets/image09.png";
import "../components/InvoicePage.css";
import jsPDF from "jspdf";

const inverterImage = {
  "hpk single phase 1mppt": hpk,
  "hps single phase 2 mppts": hps,
  "hpt three phase 2mppts": hpt_2,
  "hpt three phase 4mppts": hpt_4,
  "hhs single phase hybrid": hhs,
  "hbs single phase ac couple": hbs,
  "hht three phase hybrid": hht,
};

const solarPanelImage = {
  "yb 360-385m6": yb_360,
  "yb 120m (166)": yb_120,
  "yb m10/54h": yb_m10_54h,
  "yb m10/72h": yb_m10_72h,
  "yb m12/60h": yb_m12_60h,
  "yb m12/66h": yb_m12_66h,
};

const InvoicePage = () => {
  const [pvSystem, setPvSystem] = useState({
    numberOfMods: "",
    pvArea: "",
    power: "",
    annualPvProduction: "",
  });

  const [panel, setPanel] = useState("");
  const [inverter, setInverter] = useState("");

  const pvSystemHandler = (e) => {
    const { name, value } = e.target;
    setPvSystem((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const panelHandler = (e) => {
    setPanel(e.target.value);
  };

  const inverterHandler = (e) => {
    setInverter(e.target.value);
  };

  const generatePdf = () => {
    var doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });
    doc.html(document.querySelector("#main"), {
      callback: function (pdf) {
        pdf.save("invoice.pdf");
      },
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="Invoice-main" id="main">
      <div className="section_1">
        <div className="section_1-header">
          <img src={image01} className="section_1-header-image" alt="header" />
        </div>
        <div className="section_1-main">
          <div className="section_1-main-uppertext">
            FOURNITURE ET INSTALLATION <br></br> D'UNE CENTRALE PHOTOVOLTAIQUE
          </div>
          <div className="section_1-main-divider"></div>
          <div className="section_1-main-lowertext">
            MAÎTRE D'OUVRAGE : &nbsp;{" "}
            <input
              type="text"
              className="section_1-main-lowertext-input"
            ></input>
            <div className="section_1-main-lowertext-input-div">
              <input
                type="text"
                className="section_1-main-lowertext-input-2"
                placeholder="Input Address"
              ></input>
            </div>
          </div>
        </div>
        <div className="section_1-footer">
          <img
            src={image11}
            className="section_1-footer-image"
            alt="footerImage"
          />
        </div>
      </div>
      <div className="section_2">
        <div className="section_2-header">
          <div className="header-left-line"></div>
          <div className="section_2-header-text">
            VOTRE PROJET PHOTOVOLTAIQUE
          </div>
          <div className="header-right-line"></div>
        </div>
        <div className="section_2-main-text">
          LE DIMENSIONNEMENT DE VOS <br></br> FUTURES INSTALLATIONS SOLAIRES
        </div>
        <div className="section_2-box-header">TYPE D'INSTALLATION PV</div>
        <div className="section_2-box">
          <div className="section_2-box-top-text">Nombre de modules :</div>
          <div className="section_2-box-1">
            <input
              type="text"
              className="section_2-box-1-input"
              onChange={pvSystemHandler}
              name="numberOfMods"
            ></input>{" "}
            &nbsp;
            <div className="section_2-box-1-text">panneaux</div>
          </div>

          <div className="section_2-box-top-text">Surface PV :</div>
          <div className="section_2-box-1">
            <input
              type="text"
              className="section_2-box-1-input"
              onChange={pvSystemHandler}
              name="pvArea"
            ></input>{" "}
            &nbsp;
            <div className="section_2-box-1-text">m2 environ</div>
          </div>

          <div className="section_2-box-top-text">Puissance installée:</div>
          <div className="section_2-box-1">
            <input
              type="text"
              className="section_2-box-1-input"
              onChange={pvSystemHandler}
              name="power"
            ></input>{" "}
            &nbsp;
            <div className="section_2-box-1-text">KWC</div>
          </div>

          <div className="section_2-box-top-text">Production annuelle PV:</div>
          <div className="section_2-box-1">
            <input
              type="text"
              className="section_2-box-1-input"
              onChange={pvSystemHandler}
              name="annualPvProduction"
            ></input>{" "}
            &nbsp;
            <div className="section_2-box-1-text">W + OU - 10%</div>
          </div>
        </div>
        <div className="upload-image-div">
          <label for="file-upload">Uplaod Image:</label>
          <input type="file" id="file-upload" name="file-upload" />
        </div>
      </div>
      <div className="section_3">
        <div className="section_3-header">
          <div className="header-left-line"></div>
          <div className="section_2-header-text">
            VOTRE PROJET PHOTOVOLTAIQUE
          </div>
          <div className="header-right-line"></div>
        </div>
        <div className="section_3-text-1">NOTRE OFFRE EN INJECTION:</div>
        <div className="section_3-text-1">DETAIL TECHNIQUE SOLAIRE:</div>
        <div className="section_3-select-div">
          PANNEAU SOLAIRE &nbsp;
          <select onChange={panelHandler}>
            <option value="select">select</option>
            <option value="yb 360-385m6">yb 360-385m6</option>
            <option value="yb 120m (166)">yb 120m (166)</option>
            <option value="yb m10/54h">yb m10/54h</option>
            <option value="yb m10/72h">yb m10/72h</option>
            <option value="yb m12/60h">yb m12/60h</option>
            <option value="yb m12/66h">yb m12/66h</option>
          </select>{" "}
          &nbsp; X &nbsp;
          <div>{pvSystem.numberOfMods}</div>&nbsp; PCS ( À AFFINER SUIVANT
          CALEPINAGE)
        </div>

        <div className="section_3-select-div">
          ONDULEUR &nbsp;
          <select onChange={inverterHandler}>
            <option value="select">select</option>
            <option value="hpk single phase 1mppt">
              hpk single phase 1mppt
            </option>
            <option value="hps single phase 2 mppts">
              hps single phase 2 mppts
            </option>
            <option value="hpt three phase 2mppts">
              hpt three phase 2mppts
            </option>
            <option value="hpt three phase 4mppts">
              hpt three phase 4mppts
            </option>
            <option value="hhs single phase hybrid">
              hhs single phase hybrid
            </option>
            <option value="hbs single phase ac couple">
              hbs single phase ac couple
            </option>
            <option value="hht three phase hybrid">
              hht three phase hybrid
            </option>
          </select>{" "}
          &nbsp; X &nbsp;
          <input /> PCS &nbsp;
        </div>
        <div className="section_3-list-div">
          <ol style={{ listStyleType: "disc", paddingLeft: "9vw" }}>
            <li>SUPPORT VALIDE PAR ETN</li>
            <li>VISSERIE INOX ET SUPPORT INOX</li>
            <li>CÂBLAGE ÉLECTRIQUE ET RACCORDEMENT</li>
            <li>COFFRET AC/DC PAR TRANCHE DE 100 KW</li>
          </ol>
        </div>
        <div className="section_3-image-div">
          <img src={image69} alt="solar panel" className="section_3-image" />
        </div>
      </div>
      <div className="section_4">
        <div className="section_3-header">
          <div className="header-left-line"></div>
          <div className="section_2-header-text">
            VOTRE PROJET PHOTOVOLTAIQUE
          </div>
          <div className="header-right-line"></div>
        </div>
        <div className="section_4-header-div">
          <div className="section_4-header-bar"></div>&nbsp;{" "}
          <div className="section_4-header-text">NOTRE OFFRE :</div>
        </div>
        <div className="section_4-main-div">
          <div className="section_4-main-div-1">
            <div className="section_4-text">
              SÉCURITÉ INDIVIDUELLE ET COLLECTIVE (Formation des équipes ,{" "}
              <br></br>
              échafaudage, élévateur(s ), équipements individuels …{" "}
            </div>
          </div>{" "}
          &nbsp; <input className="section_4-main-input" /> &nbsp;
          <div className="section_4-main-input-text">€ HT</div>
        </div>
        <div className="section_4-main-div2">
          <div className="section_4-main-div-2">
            <div className="section_4-text">
              PANNEAUX : &nbsp;<span>{pvSystem.power}00</span>&nbsp;Wc soit{" "}
              {pvSystem.numberOfMods} &nbsp; Monocristallin 420 Wc (minimum){" "}
              <input type="text" /> , garantie produit 25 ans et rentabilité
              84,8% à 25 ans éco participation comprise. Bilan carbone fournis.{" "}
            </div>
          </div>{" "}
          &nbsp; <input className="section_4-main-input" /> &nbsp;
          <div className="section_4-main-input-text">€ HT</div>
        </div>
        <div className="section_4-main-div3">
          <div className="section_4-main-div-3">
            <div className="section_4-text">
              POSE INTÉGRATION ''SIMPLIFÉE'' : sur toiture plate avec membrane
              bitumeuse <input type="text" />
              m2 ( hors chemin technique)). Fourniture du système de fixation en
              fonction de la membrane (sous atec). Pose des plots par un
              étancheur à prévoir Montage des modules Assurance RC et décennale
              incluse fournie au début et fin de chan{" "}
            </div>
          </div>{" "}
          &nbsp; <input className="section_4-main-input" /> &nbsp;
          <div className="section_4-main-input-text">€ HT</div>
        </div>
        <div className="section_4-main-div4">
          <div className="section_4-main-div-4">
            <div className="section_4-text">
              ONDULEUR :{inverter} garanti 5 ans (10 ans avec notre contrat de
              maintenance), Suivi à distance et plateforme intégrée. Fourniture
              et pos e d'un TGBT photovoltaïque Liaison DC comprise.
              Équipotentialité comprise Coffret de protection électrique AC/DC,
              connectique et câblages
            </div>
          </div>{" "}
          &nbsp; <input className="section_4-main-input" /> &nbsp;
          <div className="section_4-main-input-text">€ HT</div>
        </div>
        <div className="section_4-main-div5">
          <div className="section_4-main-div-5">
            <div className="section_4-text">
              FRAIS DE POSE ÉLECTRIQUE : Liais on AC comprise jusqu'à 80 m 3 X
              185 mm² + 1 x95 mm² alu assure une perte en ligne % sans tranchée
              AGCP dans coffret régie locale, note de calcul, validation bureau
              de contrôle SOCOTEC, CONSUEL, Attestation ENR comprise
            </div>
          </div>{" "}
          &nbsp; <input className="section_4-main-input" /> &nbsp;
          <div className="section_4-main-input-text">€ HT</div>
        </div>
        <div className="section_4-footer-text">
          Ce devis comprend le suivi et l'installation de votre projet jusqu'à
          la mise en service et 1 an après la visite de contrôle de la première
          année. Nos équipes auront accès aux données toute la durée du contrat
          de maintenance. Vous aurez la possibilité de le prolonger selon vos
          besoins.
        </div>
        <div className="section_4-footer">
          <div className="section_4-footer-bar"></div>&nbsp;
          <div className="section_4-footer-bar-text">
            <div className="section_4-footer-bar-text-1">PRIX TOTAL HT:</div>
            <div className="section_4-footer-bar-text-1">PRIX TOTAL HT:</div>
            <div className="section_4-footer-bar-text-1">PRIX TOTAL HT:</div>
          </div>
          &nbsp;
          <div className="section_4-footer-horizontal-bar">
            <input className="section_4-footer-horizontal-bar-input" />
            <input className="section_4-footer-horizontal-bar-input" />
            <input className="section_4-footer-horizontal-bar-input" />
          </div>
        </div>
      </div>
      <div>
        {solarPanelImage[panel] && (
          <img
            style={{ width: "100%" }}
            src={solarPanelImage[panel]}
            alt="solar-panel-image"
          />
        )}
        {inverterImage[inverter] && (
          <img
            style={{ width: "100%" }}
            src={inverterImage[inverter]}
            alt="inverter-image"
          />
        )}
      </div>
      <div className="section_5">
        <div
          style={{
            backgroundColor: "#1d1d1d",
            marginBottom: 0,
            paddingBottom: 100,
          }}
        >
          <img src={image09} style={{ width: "100%" }} />
          <div
            style={{
              // display: 'flex',
              alignItems: "center",
              color: "white",
              marginLeft: 100,
            }}
          >
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="section_5-input"
              
            ></input>
            <label htmlFor="phone">Title:</label>
            <input
              id="title"
              type="text"
              className="section_5-input"
              
            ></input>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="text"
              className="section_5-input"
              
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              className="section_5-input"
              
            ></input>
          </div>
          <div>
            <button className="download-button" onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
