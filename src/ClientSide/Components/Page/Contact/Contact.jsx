import React from "react";
import Footer from "../../Footer/Footer";
import "./Contact.css";
import man from "../../../assets/Images/man.png";
import contact_background from "../../../assets/Images/contact_background.jpg";
import logo from "../../../assets/Images/logo.png";
import placeholder from "../../../assets/Images/placeholder.svg";
import phone_call from "../../../assets/Images/phone-call.svg";
import message from "../../../assets/Images/message.svg";
import planet_earth from "../../../assets/Images/planet-earth.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="super_container">
      <div className="contact">
        <div
          className="contact_background parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${contact_background})` }}
        ></div>
        <div className="contact_content">
          <div className="contact_title">
            <h1>{t("contact us")} </h1>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about_image">
                <img src={man} alt="" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content">
                <div className="logo_container about_logo">
                  <div className="logoa">
                    <a href="#">
                      <img src={logo} alt="" />
                      Osson-Travel
                    </a>
                  </div>
                </div>
                <p className="about_text">{t("contact-info")}</p>
                <ul className="about_social_list">
                  <li className="about_social_item">
                    <a href="/">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="about_social_item">
                    <a href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="about_social_item">
                    <a href="/">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="about_social_item">
                    <a href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="about_social_item">
                    <a href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="about_info">
                <ul className="contact_info_list">
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={placeholder} alt="" />
                      </div>
                    </div>
                    <div className="contact_info_text">
                      {t("footer-address")}
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={phone_call} alt="" />
                      </div>
                    </div>
                    <div className="contact_info_text">+99891 679 2002</div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={message} alt="" />
                      </div>
                    </div>
                    <div className="contact_info_text">
                      <a
                        href="mailto:contactme@gmail.com?Subject=Hello"
                        target="_top"
                      >
                        ossontravel@mail.ru
                      </a>
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={planet_earth} alt="" />
                      </div>
                    </div>
                    <div className="contact_info_text">
                      <a href="https://colorlib.com">www.ossontravel.uz</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="travelix_map">
        <div id="google_map" className="google_map">
          <div className="map_container">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d930.0158473045759!2d71.77761765453124!3d40.3837104520361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1658569669077!5m2!1suz!2s"
                width="1400"
                height="581"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
