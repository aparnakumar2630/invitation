import React from "react";
import "./Family.css";
import heart from '../../assets/hero/Footer/heart.png'
import line from '../../assets/hero/Footer/hori_line.png'
import lotus from '../../assets/hero/Footer/lotus.png'

const Family = () => {
  return (
    <section className="family-section">

      <div className="family-container">

        <div className="family-heading">

          <span className="family-subtitle">
            ✦ WITH THE BLESSINGS OF ✦
          </span>

          <div className="family-divider">
            <span/>
    <img src={line} className="line-img"/>
            <span/>
          </div>

        </div>

        <div className="family-content">

          {/* Groom */}

          <div className="family-side">

            <h4>GROOM'S PARENTS</h4>

            <h3>Mr. Nachimuthu</h3>

            <h3>Mrs. Madheshwari</h3>

          </div>

          {/* Center */}

        <div className="family-center">

    <span className="heart-line"></span>

    <div className="center-heart">
        <img src={heart} alt="" />
    </div>

    <span className="heart-line"></span>

</div>

          {/* Bride */}

          <div className="family-side">

            <h4>BRIDE'S FAMILY</h4>

            <h3>Mr. Kumar</h3>

            <h3>Mrs. Devi</h3>

  
              <h3 className="sister-name">
            Elakiya Kumar
            </h3>
            <span className="sister-text">
              Beloved Sister
            </span>
          </div>

        </div>

        <div className="bottom-lotus">
         <img src={lotus}/>
        </div>

      </div>

    </section>
  );
};

export default Family;