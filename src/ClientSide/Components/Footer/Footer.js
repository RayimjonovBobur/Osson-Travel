import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/trevel-logo.svg";
import message from "../../assets/Images/message.svg";
import placeholder from "../../assets/Images/placeholder.svg";
import footer_blog_1 from "../../assets/Images/footer_blog_1.jpg";
import footer_blog_2 from "../../assets/Images/footer_blog_2.jpg";
import footer_blog_3 from "../../assets/Images/footer_blog_3.jpg";
import phone_call from "../../assets/Images/phone-call.svg";
import planet_earth from "../../assets/Images/planet-earth.svg";
import { t } from "i18next";

function Footer() {
  return (
    <div className="super-container">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_content footer_about">
                  <div className="logo_container footer_logo">
                    <div className="logo">
                      <Link to="/">
                        <img src={Logo} alt="" />
                        <br />
                        osson-tour
                      </Link>
                    </div>
                    <p className="footer_about_text">
                      {t("logo-text")}
                    </p>
                  </div>

                  <ul className="footer_social_list">
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa-brands fa-pinterest"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa-brands fa-twitter"></i>

                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa-brands fa-dribbble"></i>

                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa-brands fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">{t("best cities")} </div>
                <div className="footer_content footer_blog">
                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src={footer_blog_1}
                        alt="https://unsplash.com/@avidenov"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div className="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>

                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src={footer_blog_2}
                        alt="https://unsplash.com/@deannaritchie"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">New destinations for you</a>
                      </div>
                      <div className="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>

                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src={footer_blog_3}
                        alt="https://unsplash.com/@bergeryap87"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div className="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">{t("departments")} </div>
                <div className="footer_content footer_tags">
                  <ul className="tags_list clearfix">
                    <li className="tag_item">
                      <Link to="/">{t("main")} </Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("about")} </Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("all types")}</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("news")}</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("contact")}</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("lifestyle and sports")} </Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">{t("the laws of life")} </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">{t("address")} </div>
                <div className="footer_content footer_contact">
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
                      <div className="contact_info_text">+998 95 817 5555</div>
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
                          ossontravel@gmail.ru
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
                        <a href="http://ossontravel.uz">www.ossontravel.uz</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1 order-2  ">
              <div className="copyright_content d-flex flex-row align-items-center">
                <div>
                  {t("footer-info")} <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                  {" "}
                  <a href="https://colorlib.com" target="_blank">
                    {t("home")}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
