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
                    <a href="#">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </a>
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
                    <a href="/">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </a>
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
                    <a href="#">
                      see more<span></span>
                      <span></span>
                      <span></span>
                    </a>
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
    </div>
  );
};

export default Home;
