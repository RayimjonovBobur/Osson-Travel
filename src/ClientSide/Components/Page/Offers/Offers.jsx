import React from "react";
import { Link } from "react-router-dom";
import offer_1 from "../../../assets/Images/offer_1.jpg";
import offer_5 from "../../../assets/Images/offer_5.jpg";
import offer_6 from "../../../assets/Images/offer_6.jpg";
import offer_7 from "../../../assets/Images/offer_7.jpg";
import offer_8 from "../../../assets/Images/offer_8.jpg";
import about_background from "../../../assets/Images/about_background.jpg";
import Footer from "../../Footer/Footer";
import Search from "../../Search/Search";
import "./Offers.css";
import { t } from "i18next";

const Offers = () => {
  return (
    <div className="super_container">
      <div className="offers-con">
        <div
          className="offers-background-image parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${about_background})` }}
        ></div>
        <div className="offers_content-header">
          <div className="offers_title-birnchi">{t("all types")} </div>
        </div>
      </div>

      <div className="offers">
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-lg-1 temp_col"></div>
            <div className="col-lg-11">
              <div className="offers_sorting_container"></div>
            </div>

            <div className="col-lg-12">
              <div className="offers_grid">
                <div className="offers_item rating_4">
                  <div className="row">
                    <div className="col-lg-1 temp_col"></div>
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_1})` }}
                        ></div>
                        <div className="offer_name">
                          <a href="single_listing.html">Turkiya ,Istambul</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          1200$<span>10-kunga</span>
                        </div>
                        <div
                          className="rating_r rating_r_4 offers_rating"
                          data-rating="4"
                        >
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text info">
                          Istanbulda amalga oshiriladigan eng mashhur
                          tadbirlardan ba'zilari ajoyib Ayasofyani ziyorat
                          qilish, Katta bozor va ziravorlar bozorida xarid
                          qilish, Istanbuldagi Moviy masjidga borish va Galata
                          minorasidan bahramand bo'lishdir. Galata minorasi.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="button book_button">
                          <a href="/">
                            {t("in_detail")}
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">kun</div>
                            <div className="offer_reviews_subtitle">
                              davomida
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offers_item rating_3">
                  <div className="row">
                    <div className="col-lg-1 temp_col"></div>
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_5})` }}
                        ></div>
                        <div className="offer_name">
                          <a href="single_listing.html">Venetsiya,italiya</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          2700$<span>7-kunga</span>
                        </div>
                        <div
                          className="rating_r rating_r_3 offers_rating"
                          data-rating="3"
                        >
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text info">
                          Venetsiya, shubhasiz, dunyodagi eng o'ziga xos
                          shaharlar qatorida. Albatta, u Evropada kashf
                          qilinadigan eng yaxshi shaharlar qatoriga kiradi!
                          Venetsiya topografiyasi boshqa hech kimga o'xshamaydi.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="button book_button">
                          <Link to="/">
                            {t("in_detail")}
                            <span></span>
                            <span></span>
                            <span></span>
                          </Link>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">kun</div>
                            <div className="offer_reviews_subtitle">
                              davomida
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            7
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers_item rating_5">
                  <div className="row">
                    <div className="col-lg-1 temp_col"></div>
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_6})` }}
                        ></div>
                        <div className="offer_name">
                          <a href="single_listing.html">Madrid,Ispaniya</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          1300$<span>7-kunga</span>
                        </div>
                        <div
                          className="rating_r rating_r_5 offers_rating"
                          data-rating="5"
                        >
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text info">
                          Dunyoga mashhur opera teatridan tortib, Xofburg
                          saroyigacha, Vena kafelari sahnasining yorqinligi va
                          ulug'vorligigacha, Vena qayerda bo'lmasin kuch, boylik
                          va go'zallik ramzi hisoblanadi.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="button book_button">
                          <Link to="/">
                            {t("in_detail")}
                            <span></span>
                            <span></span>
                            <span></span>
                          </Link>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">kun</div>
                            <div className="offer_reviews_subtitle">
                              davomida
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers_item rating_4">
                  <div className="row">
                    <div className="col-lg-1 temp_col"></div>
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_7})` }}
                        ></div>
                        <div className="offer_name">
                          <a href="single_listing.html">Dubay,BAA</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          2700$<span>10-kunga</span>
                        </div>
                        <div
                          className="rating_r rating_r_4 offers_rating"
                          data-rating="4"
                        >
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text info">
                          Birlashgan Arab Amirliklarining eng yirik shahri, shu
                          nomdagi amirlikning ma’muriy markazi. Fors ko‘rfazi
                          qirg‘og‘ida joylashgan va dunyodagi eng issiq
                          shaharlardan biri hisoblanadi.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="button book_button">
                          <Link to="/">
                            {t("in_detail")}
                            <span></span>
                            <span></span>
                            <span></span>
                          </Link>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">kun</div>
                            <div className="offer_reviews_subtitle">
                              davonida
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            10
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="offers_item rating_3">
                  <div className="row">
                    <div className="col-lg-1 temp_col"></div>
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${offer_8})` }}
                        ></div>
                        <div className="offer_name">
                          <a href="single_listing.html">Vena,Avstriya</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          1600$<span>8-kunga</span>
                        </div>
                        <div
                          className="rating_r rating_r_3 offers_rating"
                          data-rating="3"
                        >
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <p className="offers_text info">
                          Dunyoga mashhur opera teatridan tortib, Xofburg
                          saroyigacha, Vena kafelari sahnasining yorqinligi va
                          ulug'vorligigacha, Vena qayerda bo'lmasin kuch, boylik
                          va go'zallik ramzi hisoblanadi.
                        </p>
                        <div className="offers_icons">
                          <ul className="offers_icons_list">
                            <li className="offers_icons_item">
                              <img src="images/post.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/compass.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/bicycle.png" alt="" />
                            </li>
                            <li className="offers_icons_item">
                              <img src="images/sailboat.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="button book_button">
                          <Link to="/">
                            {t("in_detail")}
                            <span></span>
                            <span></span>
                            <span></span>
                          </Link>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">kun</div>
                            <div className="offer_reviews_subtitle">
                              davomida
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            8
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Offers;
