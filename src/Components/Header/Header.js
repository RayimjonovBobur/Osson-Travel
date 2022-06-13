import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/Logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div classNameName="container">
      <header className="header">
        {/* Top Bar  */}

        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="phone">+45 345 3324 56789</div>
                <div className="social">
                  <ul className="social_list">
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="user_box ml-auto">
                  <div className="user_box_login user_box_link">
                    <a href="/">login</a>
                  </div>
                  <div className="user_box_register user_box_link">
                    <a href="/">register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation  */}

        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                  </div>
                </div>
                <div className="main_nav_container ml-auto">
                  <ul className="main_nav_list">
                    <li className="main_nav_item">
                      <Link to="/">home</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/about">about us</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/offers">offers</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/news">news</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/contact">contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="content_search ml-lg-0 ml-auto">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="17px"
                    height="17px"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                  // xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            className="mag_glass"
                            fill="#FFFFFF"
                            d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
											s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
											C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
											M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
											c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            className="mag_glass"
                            fill="#FFFFFF"
                            d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
											c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
											C-2.019,484.77-2.019,497.865,6.057,505.942z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <form id="search_form" className="search_form bez_1">
                  <input type="search" className="search_content_input bez_1" />
                </form>

                <div className="hamburger">
                  <i className="fa fa-bars trans_200"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="menu trans_500">
        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="menu_close_container">
            <div className="menu_close"></div>
          </div>
          <div className="logo menu_logo">
            <a href="/">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <ul>
            <li className="menu_item">
              <a href="index.html">home</a>
            </li>
            <li className="menu_item">
              <a href="/">about us</a>
            </li>
            <li className="menu_item">
              <a href="offers.html">offers</a>
            </li>
            <li className="menu_item">
              <a href="blog.html">news</a>
            </li>
            <li className="menu_item">
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
