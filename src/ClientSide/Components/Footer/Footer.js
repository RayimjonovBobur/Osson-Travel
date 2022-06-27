import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import message from "../../assets/Images/message.svg";
import placeholder from "../../assets/Images/placeholder.svg";
import footer_blog_1 from "../../assets/Images/footer_blog_1.jpg";
import footer_blog_2 from "../../assets/Images/footer_blog_2.jpg";
import footer_blog_3 from "../../assets/Images/footer_blog_3.jpg";
import phone_call from "../../assets/Images/phone-call.svg";
import planet_earth from "../../assets/Images/planet-earth.svg";

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
                        osson-tour
                      </Link>
                    </div>
                    <p className="footer_about_text">
                      MChJ kompaniyasi O‘zbekiston sayyohlik xizmatlari bozorida yangi hisoblanadi.
                    </p>
                  </div>

                  <ul className="footer_social_list">
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li className="footer_social_item">
                      <Link to="/">
                        <i className="fa fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">eng yaxshi shaharlar</div>
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
                <div className="footer_title">Bo'limlar</div>
                <div className="footer_content footer_tags">
                  <ul className="tags_list clearfix">
                    <li className="tag_item">
                      <Link to="/">asosiy</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">biz haqimizda</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">barcha turlar</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">yangiliklar</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">a'loqa</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">turizim va sport</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">turizim qonunlari</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">Manzil</div>
                <div className="footer_content footer_contact">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src={placeholder} alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">

                        Farg'ona shahar 24-uy
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src={phone_call} alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">+998 91 679 2002</div>
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
                  "OSSON-TOUR" mas'uliyati cheklangan jamiyati <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                  {" "}
                  <a href="https://colorlib.com" target="_blank">
                    Bosh sahifa
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
