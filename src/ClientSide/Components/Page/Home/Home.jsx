import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import home_slider from "../../../assets/Images/home_slider.jpg";
import intro_1 from "../../../assets/Images/intro_1.jpg";
import intro_2 from "../../../assets/Images/intro_2.jpg";
import intro_3 from "../../../assets/Images/intro_3.jpg";
import cta from "../../../assets/Images/cta.jpg";
import offer_1 from "../../../assets/Images/offer_1.jpg";
import post from "../../../assets/Images/post.png";
import compass from "../../../assets/Images/compass.png";
import bicycle from "../../../assets/Images/bicycle.png";
import sailboat from "../../../assets/Images/sailboat.png";
import trend_1 from "../../../assets/Images/trend_1.png";
import trend_2 from "../../../assets/Images/trend_2.png";
import trend_3 from "../../../assets/Images/trend_3.png";
import trend_4 from "../../../assets/Images/trend_4.png";
import trend_5 from "../../../assets/Images/trend_5.png";
import trend_6 from "../../../assets/Images/trend_6.png";
import trend_7 from "../../../assets/Images/trend_7.png";
import trend_8 from "../../../assets/Images/trend_8.png";
import Search from "../../Search/Search";
import Footer from "../../Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import offer_2 from "../../../assets/Images/offer_2.jpg";
import offer_3 from "../../../assets/Images/offer_3.jpg";
import offer_4 from "../../../assets/Images/offer_4.jpg";

const Home = () => {
  const [place, setPlaces] = useState([]);
  const { challageData } = useSelector((state) => state?.users_reducer);
  useEffect(() => {
    axios
      .get(`https://ossontravel.pythonanywhere.com/api/places/shuffle?count=3`)
      .then((res) => {
        setPlaces(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="super-container">
      <div className="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            <div className="owl-item home_slider_item">
              <div
                className="home_slider_background"
                style={{ backgroundImage: `url(${home_slider})` }}
              ></div>

              <div className="home_slider_content text-center">
                <div
                  className="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>osson</h1>
                  <h1>travel</h1>
                  <div className="button home_slider_button">
                    <div className="button_bcg"></div>
                    <Link to="/">
                      ba'tafsil<span></span>
                      <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home_slider_nav home_slider_prev">
            <svg
              version="1.1"
              id="Layer_2"
              x="0px"
              y="0px"
              width="28px"
              height="33px"
              viewBox="0 0 28 33"
              enableBackground="new 0 0 28 33"
            >
              <defs>
                <linearGradient id="home_grad_prev">
                  <stop offset="0%" stop-color="#fa9e1b" />
                  <stop offset="100%" stop-color="#8d4fff" />
                </linearGradient>
              </defs>
              <path
                className="nav_path"
                fill="#F3F6F9"
                d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
					M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
					C22.545,2,26,5.541,26,9.909V23.091z"
              />
              <polygon
                className="nav_arrow"
                fill="#F3F6F9"
                points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
					11.042,18.219 "
              />
            </svg>
          </div>

          <div className="home_slider_nav home_slider_next">
            <svg
              version="1.1"
              id="Layer_3"
              x="0px"
              y="0px"
              width="28px"
              height="33px"
              viewBox="0 0 28 33"
              enableBackground="new 0 0 28 33"
            >
              <defs>
                <linearGradient id="home_grad_next">
                  <stop offset="0%" stop-color="#fa9e1b" />
                  <stop offset="100%" stop-color="#8d4fff" />
                </linearGradient>
              </defs>
              <path
                className="nav_path"
                fill="#F3F6F9"
                d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
				M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
				C22.545,2,26,5.541,26,9.909V23.091z"
              />
              <polygon
                className="nav_arrow"
                fill="#F3F6F9"
                points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
				17.046,15.554 "
              />
            </svg>
          </div>

          <div className="home_slider_dots">
            <ul
              id="home_slider_custom_dots"
              className="home_slider_custom_dots"
            >
              <li className="home_slider_custom_dot active">
                <div></div>01.
              </li>
              <li className="home_slider_custom_dot">
                <div></div>02.
              </li>
              <li className="home_slider_custom_dot">
                <div></div>03.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Search />

      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="intro_title text-center">
                SAYOHATNI BIZ BILAN MAZMUNLI O'TKAZING!
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="intro_text text-center">
                <p>
                  Har bir mehmon bizning do'stimiz va hamkorimiz! Biz
                  mehmonlarimizga ularning talablari va ehtiyojlariga to'liq
                  javob beradigan yuqori sifatli turistik mahsulotni taklif
                  etamiz.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row intro_items">
            {place.map((item, i) => (
              <div className="col-lg-4 intro_col">
                <div className="intro_item">
                  <div className="intro_item_overlay"></div>
                  <div
                    className="intro_item_background"
                    style={{ backgroundImage: `url(${intro_1})` }}
                  ></div>
                  <div className="intro_item_content d-flex flex-column align-items-center justify-content-center">
                    <div className="intro_date">Iyun 5 - Iyun 15</div>
                    <div className="button intro_button">
                      <div className="button_bcg"></div>
                      <Link to={`/detailed/${item.id}`}>
                        Ba'tafsil
                        <span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    </div>
                    <div className="intro_center text-center">
                      <h1>{item.name}</h1>
                      <div className="intro_price">Narxi ${item.price1}</div>
                      <div className="rating rating_4">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta">
        <div
          className="cta_background"
          style={{ backgroundImage: `url(${cta})` }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="cta_slider_container">
                <div className="owl-carousel owl-theme cta_slider">
                  <div className="owl-item cta_item text-center">
                    <div className="cta_title">Bizning xizmatlar</div>
                    <div className="rating_r rating_r_4">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <p className="cta_text">
                      Agar siz xalqaro miqyosda sayohat qilmoqchi bo'lsangiz,
                      lekin qaerdan boshlashni bilmasangiz, biz Osson-Travel
                      kompaniyasi sizga doimo yordam berishdan mamnunmiz.
                      .“Osson Travel” kompaniyasi O‘zbekiston sayyohlik
                      xizmatlari bozorida yangi hisoblanadi. Kompaniyamiz
                      sayyohlik sohasida yangi hisoblansada tajribaga ega
                      professional turoperatorlar va yosh, iqtidorli,
                      izlanuvchan, sayohatga befarq bo'lmagan mutaxassislarni
                      sizga taklif etadi.
                    </p>
                    <div className="button cta_button">
                      <div className="button_bcg"></div>
                      <Link to="/">
                        Ba'tafsil<span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="cta_slider_nav cta_slider_prev">
                  <svg
                    version="1.1"
                    id="Layer_4"
                    x="0px"
                    y="0px"
                    width="28px"
                    height="33px"
                    viewBox="0 0 28 33"
                  >
                    <defs>
                      <linearGradient id="cta_grad_prev">
                        <stop offset="0%" stop-color="#fa9e1b" />
                        <stop offset="100%" stop-color="#8d4fff" />
                      </linearGradient>
                    </defs>
                    <path
                      className="nav_path"
                      fill="#F3F6F9"
                      d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                      className="nav_arrow"
                      fill="#F3F6F9"
                      points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 "
                    />
                  </svg>
                </div>

                <div className="cta_slider_nav cta_slider_next">
                  <svg
                    version="1.1"
                    id="Layer_5"
                    x="0px"
                    y="0px"
                    width="28px"
                    height="33px"
                    viewBox="0 0 28 33"
                  >
                    <defs>
                      <linearGradient id="cta_grad_next">
                        <stop offset="0%" stop-color="#fa9e1b" />
                        <stop offset="100%" stop-color="#8d4fff" />
                      </linearGradient>
                    </defs>
                    <path
                      className="nav_path"
                      fill="#F3F6F9"
                      d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z"
                    />
                    <polygon
                      className="nav_arrow"
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

      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">
                Eng yaxshilari ichidan tanlash qoldi...
              </h2>
            </div>
          </div>
          <div className="row offers_items">
            {place.map((item, i) => (
              <div className="col-lg-6 offers_col" key={i}>
                <div className="offers_item">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_1})` }}
                        ></div>
                        <div className="offer_name">
                          <Link to="/">
                            {item.name}, {item.capital}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="offers_content">
                        <div className="offers_price">
                          ${item.price1}
                          <span>10-kunga</span>
                        </div>
                        <div className="rating_r rating_r_4 offers_rating">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text">
                          {item.short_decription_uz}
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src={post} alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src={compass} alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src={bicycle} alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src={sailboat} alt="" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">BIZ BILAN KO'PROQ!</h2>
            </div>
          </div>
          <div className="row trending_container">
            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_1} alt="https://unsplash.com/@fransaraco" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Gruzin afsonasi</Link>
                  </div>
                  <div className="trending_price">Narxi 650$</div>
                  <div className="trending_location">Gruzin,Tbilis</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_2} alt="https://unsplash.com/@grovemade" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Qizil dengiz</Link>
                  </div>
                  <div className="trending_price">Narxi 1040$</div>
                  <div className="trending_location"> Misr,Texron</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_3} alt="https://unsplash.com/@jbriscoe" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Mehmondo'st Ozarbayjon</Link>
                  </div>
                  <div className="trending_price">Narxi 1000$</div>
                  <div className="trending_location">Ozarbayjon,Boku</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_4} alt="https://unsplash.com/@oowgnuj" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Qadimiy Rossiya</Link>
                  </div>
                  <div className="trending_price">Narxi 1200$</div>
                  <div className="trending_location">Rossiya,Moskva</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_5} alt="https://unsplash.com/@mindaugas" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">CHexiya tog' kurorti</Link>
                  </div>
                  <div className="trending_price">Narxi 1300$</div>
                  <div className="trending_location">CHexiya, Praga</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_6} alt="https://unsplash.com/@itsnwa" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Shveysariya tog'lari</Link>
                  </div>
                  <div className="trending_price">Narxi 2010$</div>
                  <div className="trending_location">Shveysariya, Bern</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={trend_7} alt="https://unsplash.com/@rktkn" />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Buyuk Xitoy</Link>
                  </div>
                  <div className="trending_price">Narxi 1300$</div>
                  <div className="trending_location">Xitoy,Pekin</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img
                    src={trend_8}
                    alt="https://unsplash.com/@thoughtcatalog"
                  />
                </div>
                <div className="trending_content">
                  <div className="trending_title">
                    <Link to="/">Niderlandiya</Link>
                  </div>
                  <div className="trending_price">Narxi 1300$</div>
                  <div className="trending_location">
                    Niderlandiya,Amsterdam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
