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
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 footer_column">
              <div class="footer_col">
                <div class="footer_content footer_about">
                  <div class="logo_container footer_logo">
                    <div class="logo">
                      <Link to="/">
                        <img src={Logo} alt="" />
                        travelix
                      </Link>
                    </div>
                  </div>
                  <p class="footer_about_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc
                    et suscipit urna. Integer eleme ntum orci eu vehicula
                    pretium.
                  </p>
                  <ul class="footer_social_list">
                    <li class="footer_social_item">
                      <Link to="/">
                        <i class="fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li class="footer_social_item">
                      <Link to="/">
                        <i class="fa fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li class="footer_social_item">
                      <Link to="/">
                        <i class="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li class="footer_social_item">
                      <Link to="/">
                        <i class="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li class="footer_social_item">
                      <Link to="/">
                        <i class="fa fa-behance"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3 footer_column">
              <div class="footer_col">
                <div class="footer_title">blog posts</div>
                <div class="footer_content footer_blog">
                  <div class="footer_blog_item clearfix">
                    <div class="footer_blog_image">
                      <img
                        src={footer_blog_1}
                        alt="https://unsplash.com/@avidenov"
                      />
                    </div>
                    <div class="footer_blog_content">
                      <div class="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div class="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>

                  <div class="footer_blog_item clearfix">
                    <div class="footer_blog_image">
                      <img
                        src={footer_blog_2}
                        alt="https://unsplash.com/@deannaritchie"
                      />
                    </div>
                    <div class="footer_blog_content">
                      <div class="footer_blog_title">
                        <a href="blog.html">New destinations for you</a>
                      </div>
                      <div class="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>

                  <div class="footer_blog_item clearfix">
                    <div class="footer_blog_image">
                      <img
                        src={footer_blog_3}
                        alt="https://unsplash.com/@bergeryap87"
                      />
                    </div>
                    <div class="footer_blog_content">
                      <div class="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div class="footer_blog_date">Nov 29, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 footer_column">
              <div class="footer_col">
                <div class="footer_title">tags</div>
                <div class="footer_content footer_tags">
                  <ul class="tags_list clearfix">
                    <li class="tag_item">
                      <Link to="/">design</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">fashion</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">music</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">video</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">party</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">photography</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">adventure</Link>
                    </li>
                    <li class="tag_item">
                      <Link to="/">travel</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3 footer_column">
              <div class="footer_col">
                <div class="footer_title">contact info</div>
                <div class="footer_content footer_contact">
                  <ul class="contact_info_list">
                    <li class="contact_info_item d-flex flex-row">
                      <div>
                        <div class="contact_info_icon">
                          <img src={placeholder} alt="" />
                        </div>
                      </div>
                      <div class="contact_info_text">
                        4127 Raoul Wallenber 45b-c Gibraltar
                      </div>
                    </li>
                    <li class="contact_info_item d-flex flex-row">
                      <div>
                        <div class="contact_info_icon">
                          <img src={phone_call} alt="" />
                        </div>
                      </div>
                      <div class="contact_info_text">2556-808-8613</div>
                    </li>
                    <li class="contact_info_item d-flex flex-row">
                      <div>
                        <div class="contact_info_icon">
                          <img src={message} alt="" />
                        </div>
                      </div>
                      <div class="contact_info_text">
                        <a
                          href="mailto:contactme@gmail.com?Subject=Hello"
                          target="_top"
                        >
                          contactme@gmail.com
                        </a>
                      </div>
                    </li>
                    <li class="contact_info_item d-flex flex-row">
                      <div>
                        <div class="contact_info_icon">
                          <img src={planet_earth} alt="" />
                        </div>
                      </div>
                      <div class="contact_info_text">
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

      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-lg-1 order-2  ">
              <div class="copyright_content d-flex flex-row align-items-center">
                <div>
                  Copyright &copy;2022 All rights reserved | This template is
                  made with <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-9 order-lg-2 order-1">
              <div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                <div class="footer_nav">
                  <ul class="footer_nav_list">
                    <li class="footer_nav_item">
                      <Link to="/">home</Link>
                    </li>
                    <li class="footer_nav_item">
                      <a href="about.html">about us</a>
                    </li>
                    <li class="footer_nav_item">
                      <a href="offers.html">offers</a>
                    </li>
                    <li class="footer_nav_item">
                      <Link to="/news">news</Link>
                    </li>
                    <li class="footer_nav_item">
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
