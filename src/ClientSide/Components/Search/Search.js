import React from "react";
import bus from "../../assets/Images/bus.png";
import diving from "../../assets/Images/diving.png";
import island from "../../assets/Images/island.png";
import departure from "../../assets/Images/departure.png";
import suitcase from "../../assets/Images/suitcase.png";
import cruise from "../../assets/Images/cruise.png";
import { t } from "i18next";

const Search = () => {
  return (
    <div className="super-container">
      <div className="search">
        <div className="container fill_height">
          <div className="row fill_height">
            <div className="col fill_height">
              <div className="search_tabs_container">
                <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                  <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={suitcase} alt="" />
                    <span>{t("hotel")} </span>
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={bus} alt="" />
                    {t("car")}
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={departure} alt="" />
                    {t("airplane")}
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={island} alt="" />
                    {t("beach")}
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={cruise} alt="" />
                    {t("boat")}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
