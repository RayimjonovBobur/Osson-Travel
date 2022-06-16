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
                        travelix
                      </Link>
                    </div>
                  </div>
                  <p className="footer_about_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc
                    et suscipit urna. Integer eleme ntum orci eu vehicula
                    pretium.
                  </p>
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
                <div className="footer_title">blog posts</div>
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
                <div className="footer_title">tags</div>
                <div className="footer_content footer_tags">
                  <ul className="tags_list clearfix">
                    <li className="tag_item">
                      <Link to="/">design</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">fashion</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">music</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">video</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">party</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">photography</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">adventure</Link>
                    </li>
                    <li className="tag_item">
                      <Link to="/">travel</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">contact info</div>
                <div className="footer_content footer_contact">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src={placeholder} alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        4127 Raoul Wallenber 45b-c Gibraltar
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src={phone_call} alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">2556-808-8613</div>
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
                          contactme@gmail.com
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
                        <a href="https://colorlib.com">www.colorlib.com</a>
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
                  Copyright &copy;2022 All rights reserved | This template is
                  made with <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
                  by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-lg-2 order-1">
              <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                <div className="footer_nav">
                  <ul className="footer_nav_list">
                    <li className="footer_nav_item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="footer_nav_item">
                      <a href="about.html">about us</a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="offers.html">offers</a>
                    </li>
                    <li className="footer_nav_item">
                      <Link to="/news">news</Link>
                    </li>
                    <li className="footer_nav_item">
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
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
