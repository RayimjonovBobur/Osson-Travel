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
          <div className="about_title">Biz haqimizda</div>
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
                <div className="intro_title">we have the best tours</div>
                <p className="intro_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et
                  suscipit urna. Integer elementum orci eu vehicula pretium.
                  Donec bibendum tristique condimentum. Aenean in lacus ligula.
                  Phasellus euismod gravida eros. Aenean nec ipsum aliquet,
                  pharetra magna id, interdum sapien. Etiam id lorem eu nisl
                  pellentesque semper. Nullam tincidunt metus placerat, suscipit
                  leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend
                  dui nunc, non fermentum quam placerat non. Etiam venenatis
                  nibh augue, sed eleifend justo tristique eu
                </p>
                <div className="button intro_button">
                  <div className="button_bcg"></div>
                  <a href="#">
                    explore now<span></span>
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
              <div className="section_title">years statistics</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <p className="stats_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis vulputate eros, iaculis consequat nisl. Nunc et suscipit
                urna. Integer elementum orci eu vehicula pretium. Donec bibendum
                tristique condimentum. Aenean in lacus ligula.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="stats_years">
                <div className="stats_years_last">2016</div>
                <div className="stats_years_new float-right">2017</div>
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
                      <div className="stats_type">Clients</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="1642"
                    data-y="3527"
                    data-color="#31124b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_1} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">3527</div>
                      <div className="stats_type">Clients</div>
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
                      <div className="stats_type">Returning Clients</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="768"
                    data-y="145"
                    data-color="#a95ce4"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_2} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">145</div>
                      <div className="stats_type">Returning Clients</div>
                    </div>
                  </div>
                </div>

                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_3} alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">11546</div>
                      <div className="stats_type">Reach</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="11546"
                    data-y="9321"
                    data-color="#fa6f1b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_3.png" alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">9321</div>
                      <div className="stats_type">Reach</div>
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
                      <div className="stats_type">Items</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x="3729"
                    data-y="17429"
                    data-color="#fa9e1b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src={stats_4} alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">17429</div>
                      <div className="stats_type">More Items</div>
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
                    From <span>$999</span>
                  </div>
                  <div className="button add_button">
                    <div className="button_bcg"></div>
                    <a href="#">
                      explore now<span></span>
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

      <div className="milestones">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_1.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="255">
                  0
                </div>
                <div className="milestone_text">Clients</div>
              </div>
            </div>

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_2.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="1176">
                  0
                </div>
                <div className="milestone_text">Projects</div>
              </div>
            </div>

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_3.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="39">
                  0
                </div>
                <div className="milestone_text">Countries</div>
              </div>
            </div>

            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_4.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value="127">
                  0
                </div>
                <div className="milestone_text">Coffees</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
