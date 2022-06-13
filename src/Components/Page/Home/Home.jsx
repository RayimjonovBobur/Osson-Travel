import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bus from "../../../assets/Images/bus.png";
import diving from "../../../assets/Images/diving.png";
import island from "../../../assets/Images/island.png";
import departure from "../../../assets/Images/departure.png";
import suitcase from "../../../assets/Images/suitcase.png";
import cruise from "../../../assets/Images/cruise.png";
import home_slider from "../../../assets/Images/home_slider.jpg";
import intro_1 from "../../../assets/Images/intro_1.jpg";
import intro_2 from "../../../assets/Images/intro_2.jpg";
import intro_3 from "../../../assets/Images/intro_3.jpg";
import cta from "../../../assets/Images/cta.jpg";
import offer_1 from "../../../assets/Images/offer_1.jpg";
import offer_2 from "../../../assets/Images/offer_2.jpg";
import offer_3 from "../../../assets/Images/offer_3.jpg";
import offer_4 from "../../../assets/Images/offer_4.jpg";
import post from "../../../assets/Images/post.png";
import compass from "../../../assets/Images/compass.png";
import bicycle from "../../../assets/Images/bicycle.png";
import sailboat from "../../../assets/Images/sailboat.png";
import test_1 from "../../../assets/Images/test_1.jpg";
import test_2 from "../../../assets/Images/test_2.jpg";
import test_3 from "../../../assets/Images/test_3.jpg";
import kayak from "../../../assets/Images/kayak.png";
import backpack from "../../../assets/Images/backpack.png";
import island_t from "../../../assets/Images/island_t.png";
import trend_1 from "../../../assets/Images/trend_1.png";
import trend_2 from "../../../assets/Images/trend_2.png";
import trend_3 from "../../../assets/Images/trend_3.png";
import trend_4 from "../../../assets/Images/trend_4.png";
import trend_5 from "../../../assets/Images/trend_5.png";
import trend_6 from "../../../assets/Images/trend_6.png";
import trend_7 from "../../../assets/Images/trend_7.png";
import trend_8 from "../../../assets/Images/trend_8.png";

const Home = () => {
  return (
    <div className="super-container">
      <div class="home">
        <div class="home_slider_container">
          <div class="owl-carousel owl-theme home_slider">
            <div class="owl-item home_slider_item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: `url(${home_slider})` }}
              ></div>

              <div class="home_slider_content text-center">
                <div
                  class="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div class="button home_slider_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      explore now<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="owl-item home_slider_item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: "url(images/home_slider.jpg)" }}
              ></div>

              <div class="home_slider_content text-center">
                <div
                  class="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div class="button home_slider_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      explore now<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="owl-item home_slider_item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: "url(images/home_slider.jpg)" }}
              ></div>

              <div class="home_slider_content text-center">
                <div
                  class="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div class="button home_slider_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      explore now<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div class="home_slider_nav home_slider_prev">
            <svg
              version="1.1"
              id="Layer_2"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="28px"
              height="33px"
              viewBox="0 0 28 33"
              enableBackground="new 0 0 28 33"
              //   xml:space="preserve"
            >
              <defs>
                <linearGradient id="home_grad_prev">
                  <stop offset="0%" stop-color="#fa9e1b" />
                  <stop offset="100%" stop-color="#8d4fff" />
                </linearGradient>
              </defs>
              <path
                class="nav_path"
                fill="#F3F6F9"
                d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z"
              />
              <polygon
                class="nav_arrow"
                fill="#F3F6F9"
                points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 "
              />
            </svg>
          </div>

          <div class="home_slider_nav home_slider_next">
            <svg
              version="1.1"
              id="Layer_3"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="28px"
              height="33px"
              viewBox="0 0 28 33"
              enableBackground="new 0 0 28 33"
              //   xml:space="preserve"
            >
              <defs>
                <linearGradient id="home_grad_next">
                  <stop offset="0%" stop-color="#fa9e1b" />
                  <stop offset="100%" stop-color="#8d4fff" />
                </linearGradient>
              </defs>
              <path
                class="nav_path"
                fill="#F3F6F9"
                d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z"
              />
              <polygon
                class="nav_arrow"
                fill="#F3F6F9"
                points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 "
              />
            </svg>
          </div>

          <div class="home_slider_dots">
            <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
              <li class="home_slider_custom_dot active">
                <div></div>01.
              </li>
              <li class="home_slider_custom_dot">
                <div></div>02.
              </li>
              <li class="home_slider_custom_dot">
                <div></div>03.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="search">
        <div class="container fill_height">
          <div class="row fill_height">
            <div class="col fill_height">
              <div class="search_tabs_container">
                <div class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                  <div class="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={suitcase} alt="" />
                    <span>hotels</span>
                  </div>
                  <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={bus} alt="" />
                    car rentals
                  </div>
                  <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={departure} alt="" />
                    flights
                  </div>
                  <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={island} alt="" />
                    trips
                  </div>
                  <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={cruise} alt="" />
                    cruises
                  </div>
                  <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={diving} alt="" />
                    activities
                  </div>
                </div>
              </div>

              {/* Search Panel */}

              <div class="search_panel active">
                <form
                  action="#"
                  id="search_form_1"
                  class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                >
                  <div class="search_item">
                    <div>destination</div>
                    <input
                      type="text"
                      class="destination search_input"
                      required="required"
                    />
                  </div>
                  <div class="search_item">
                    <div>check in</div>
                    <input
                      type="text"
                      class="check_in search_input"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div class="search_item">
                    <div>check out</div>
                    <input
                      type="text"
                      class="check_out search_input"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div class="search_item">
                    <div>adults</div>
                    <select
                      name="adults"
                      id="adults_1"
                      class="dropdown_item_select search_input"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <div class="search_item">
                    <div>children</div>
                    <select
                      name="children"
                      id="children_1"
                      class="dropdown_item_select search_input"
                    >
                      <option>0</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <button class="button search_button">
                    search<span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="intro_title text-center">We have the best tours</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="intro_text text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam eu convallis tortor. Suspendisse potenti. In faucibus
                  massa arcu, vitae cursus mi hendrerit nec.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="row intro_items">
            {/* <!-- Intro Item --> */}

            <div class="col-lg-4 intro_col">
              <div class="intro_item">
                <div class="intro_item_overlay"></div>
                {/* <!-- Image by https://unsplash.com/@dnevozhai --> */}
                <div
                  class="intro_item_background"
                  style={{ backgroundImage: `url(${intro_1})` }}
                ></div>
                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="intro_date">May 25th - June 01st</div>
                  <div class="button intro_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                  <div class="intro_center text-center">
                    <h1>Mauritius</h1>
                    <div class="intro_price">From $1450</div>
                    <div class="rating rating_4">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Intro Item --> */}

            <div class="col-lg-4 intro_col">
              <div class="intro_item">
                <div class="intro_item_overlay"></div>
                {/* <!-- Image by https://unsplash.com/@hellolightbulb --> */}
                <div
                  class="intro_item_background"
                  style={{ backgroundImage: `url(${intro_2})` }}
                ></div>
                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="intro_date">May 25th - June 01st</div>
                  <div class="button intro_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                  <div class="intro_center text-center">
                    <h1>Greece</h1>
                    <div class="intro_price">From $1450</div>
                    <div class="rating rating_4">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Intro Item --> */}

            <div class="col-lg-4 intro_col">
              <div class="intro_item">
                <div class="intro_item_overlay"></div>
                {/* <!-- Image by https://unsplash.com/@willianjusten --> */}
                <div
                  class="intro_item_background"
                  style={{ backgroundImage: `url(${intro_3})` }}
                ></div>
                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                  <div class="intro_date">May 25th - June 01st</div>
                  <div class="button intro_button">
                    <div class="button_bcg"></div>
                    <Link to="/">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </div>
                  <div class="intro_center text-center">
                    <h1>Scotland</h1>
                    <div class="intro_price">From $1450</div>
                    <div class="rating rating_4">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cta">
        <div
          class="cta_background"
          style={{ backgroundImage: `url(${cta})` }}
        ></div>

        <div class="container">
          <div class="row">
            <div class="col">
              <div class="cta_slider_container">
                <div class="owl-carousel owl-theme cta_slider">
                  <div class="owl-item cta_item text-center">
                    <div class="cta_title">maldives deluxe package</div>
                    <div class="rating_r rating_r_4">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p class="cta_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam eu convallis tortor. Suspendisse potenti. In
                      faucibus massa arcu, vitae cursus mi hendrerit nec. Proin
                      bibendum, augue faucibus tincidunt ultrices, tortor augue
                      gravida lectus, et efficitur enim justo vel ligula.
                    </p>
                    <div class="button cta_button">
                      <div class="button_bcg"></div>
                      <Link to="/">
                        book now<span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="cta_slider_nav cta_slider_prev">
                  <svg
                    version="1.1"
                    id="Layer_4"
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="28px"
                    height="33px"
                    viewBox="0 0 28 33"
                    // enable-background="new 0 0 28 33"
                    // xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="cta_grad_prev">
                        <stop offset="0%" stop-color="#fa9e1b" />
                        <stop offset="100%" stop-color="#8d4fff" />
                      </linearGradient>
                    </defs>
                    <path
                      class="nav_path"
                      fill="#F3F6F9"
                      d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                      class="nav_arrow"
                      fill="#F3F6F9"
                      points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 "
                    />
                  </svg>
                </div>

                <div class="cta_slider_nav cta_slider_next">
                  <svg
                    version="1.1"
                    id="Layer_5"
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="28px"
                    height="33px"
                    viewBox="0 0 28 33"
                    // enable-background="new 0 0 28 33"
                    // xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="cta_grad_next">
                        <stop offset="0%" stop-color="#fa9e1b" />
                        <stop offset="100%" stop-color="#8d4fff" />
                      </linearGradient>
                    </defs>
                    <path
                      class="nav_path"
                      fill="#F3F6F9"
                      d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                      class="nav_arrow"
                      fill="#F3F6F9"
                      points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 "
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="offers">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h2 class="section_title">the best offers with rooms</h2>
            </div>
          </div>
          <div class="row offers_items">
            <div class="col-lg-6 offers_col">
              <div class="offers_item">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="offers_image_container">
                      <div
                        class="offers_image_background"
                        style={{ backgroundImage: `url(${offer_1})` }}
                      ></div>
                      <div class="offer_name">
                        <a href="#">grand castle</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="offers_content">
                      <div class="offers_price">
                        $70<span>per night</span>
                      </div>
                      <div class="rating_r rating_r_4 offers_rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <p class="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
                      </p>
                      <div class="offers_icons">
                        <ul class="offers_icons_list">
                          <li class="offers_icons_item">
                            <img src={post} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={compass} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={bicycle} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={sailboat} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div class="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 offers_col">
              <div class="offers_item">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="offers_image_container">
                      <div
                        class="offers_image_background"
                        style={{ backgroundImage: `url(${offer_2})` }}
                      ></div>
                      <div class="offer_name">
                        <a href="#">turkey hills</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="offers_content">
                      <div class="offers_price">
                        $50<span>per night</span>
                      </div>
                      <div class="rating_r rating_r_4 offers_rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <p class="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
                      </p>
                      <div class="offers_icons">
                        <ul class="offers_icons_list">
                          <li class="offers_icons_item">
                            <img src={post} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={compass} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={bicycle} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={sailboat} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div class="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 offers_col">
              <div class="offers_item">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="offers_image_container">
                      <div
                        class="offers_image_background"
                        style={{ backgroundImage: `url(${offer_3})` }}
                      ></div>
                      <div class="offer_name">
                        <a href="#">island dream</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="offers_content">
                      <div class="offers_price">
                        $90<span>per night</span>
                      </div>
                      <div class="rating_r rating_r_4 offers_rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <p class="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
                      </p>
                      <div class="offers_icons">
                        <ul class="offers_icons_list">
                          <li class="offers_icons_item">
                            <img src={post} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={compass} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={bicycle} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={sailboat} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div class="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 offers_col">
              <div class="offers_item">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="offers_image_container">
                      <div
                        class="offers_image_background"
                        style={{ backgroundImage: `url(${offer_4})` }}
                      ></div>
                      <div class="offer_name">
                        <a href="#">travel light</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="offers_content">
                      <div class="offers_price">
                        $30<span>per night</span>
                      </div>
                      <div class="rating_r rating_r_4 offers_rating">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                      </div>
                      <p class="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
                      </p>
                      <div class="offers_icons">
                        <ul class="offers_icons_list">
                          <li class="offers_icons_item">
                            <img src={post} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={compass} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={bicycle} alt="" />
                          </li>
                          <li class="offers_icons_item">
                            <img src={sailboat} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div class="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="trending">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h2 class="section_title">trending now</h2>
            </div>
          </div>
          <div class="row trending_container">
            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_1} alt="https://unsplash.com/@fransaraco" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">grand hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_2} alt="https://unsplash.com/@grovemade" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">mars hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_3} alt="https://unsplash.com/@jbriscoe" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">queen hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_4} alt="https://unsplash.com/@oowgnuj" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">mars hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_5} alt="https://unsplash.com/@mindaugas" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">grand hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_6} alt="https://unsplash.com/@itsnwa" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">mars hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img src={trend_7} alt="https://unsplash.com/@rktkn" />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">queen hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6">
              <div class="trending_item clearfix">
                <div class="trending_image">
                  <img
                    src={trend_8}
                    alt="https://unsplash.com/@thoughtcatalog"
                  />
                </div>
                <div class="trending_content">
                  <div class="trending_title">
                    <a href="#">mars hotel</a>
                  </div>
                  <div class="trending_price">From $182</div>
                  <div class="trending_location">madrid, spain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
