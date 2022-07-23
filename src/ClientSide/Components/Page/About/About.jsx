import React from "react";
import Footer from "../../Footer/Footer";
import "./About.css";
import add from "../../../assets/Images/add.jpg";
import about_background from "../../../assets/Images/about_background.jpg";
import stats_1 from "../../../assets/Images/stats_1.png";
import stats_2 from "../../../assets/Images/stats_2.png";
import stats_3 from "../../../assets/Images/stats_3.png";
import stats_4 from "../../../assets/Images/stats_4.png";
import intro from "../../../assets/Images/intro.png";
import { t } from "i18next";

const About = () => {
  return (
    <div className="super-conatiner">
      <div className="about">
        <div
          className="about_background parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${about_background})` }}
        ></div>
        <div className="about_content-header">
          <div className="about_title">{t("about")}</div>
        </div>
      </div>

      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="intro_image">
                <img src={intro} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="intro_content">
                <div className="intro_title">{t("good types")} </div>
                <p className="intro_text">{t("about-text")}</p>
                <div className="button info-button">
                  <div className="button_bcg"></div>
                  <a href="/">
                    {t("in_detail")}
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title">{t("our-customers")}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <p className="stats_text">{t("about-info")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="stats_years">
                <div className="stats_years_last">2021</div>
                <div className="stats_years_new float-right">2022</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="stats_contents">
                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_1} alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">1642</div>
                      <div className="stats_type">{t("customers")} </div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="1642"
                    data-y="3527"
                    data-color="#31124b"
                  >
                    <div
                      className="stats_bar_perc"
                      style={{ width: "50%", left: "50%" }}
                    >
                      <div>
                        <div className="stats_bar_value">115%</div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_1} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">3527</div>
                      <div className="stats_type">{t("customers")}</div>
                    </div>
                  </div>
                </div>

                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_2} alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">768</div>
                      <div className="stats_type">{t("customers")}</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="768"
                    data-y="145"
                    data-color="#a95ce4"
                  >
                    <div
                      className="stats_bar_perc"
                      style={{
                        width: "40%",
                        right: "50%",
                        background: " rgb(169, 92, 228)",
                      }}
                    >
                      <div>
                        <div
                          className="stats_bar_value"
                          style={{ right: 0, textAlign: "right" }}
                        >
                          -81
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_2} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">145</div>
                      <div className="stats_type">{t("customers")}</div>
                    </div>
                  </div>
                </div>

                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_4} alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">3729</div>
                      <div className="stats_type">{t("customers")}</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="3729"
                    data-y="17429"
                    data-color="#fa9e1b"
                  >
                    <div
                      className="stats_bar_perc"
                      style={{
                        width: "50%",
                        left: "50%",
                        background: "rgb(250, 158, 27)",
                      }}
                    >
                      <div>
                        <div
                          className="stats_bar_value"
                          style={{ right: 0, textAlign: "left " }}
                        >
                          +367
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_4} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">17429</div>
                      <div className="stats_type">{t("customers")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="add">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="add_container">
                <div
                  className="add_background"
                  style={{ backgroundImage: `url(${add})` }}
                ></div>
                <div className="add_content">
                  <h1 className="add_title">thailand</h1>
                  <div className="add_subtitle">
                    {t("cost")} <span>2300$</span>
                  </div>
                  <div className="button add_button">
                    <div className="button_bcg"></div>
                    <a href="/">
                      {t("in_detail")}
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="milestones"></div>

      <Footer />
    </div>
  );
};

export default About;
