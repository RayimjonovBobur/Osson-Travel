import React from "react";
import i18n from "i18next";
import offer_1 from "../../../assets/Images/offer_1.jpg";

const Cards = ({ data }) => {
  const challage = i18n.language;
  const NewData = {};

  if (challage === "uz") {
    NewData.name = data.name_uz;
    NewData.capital = data.capital_uz;
    NewData.short_decription = data.short_decription_uz;
  } else if (challage === "ru") {
    NewData.name = data.name_ru;
    NewData.capital = data.capital_ru;
    NewData.short_decription = data.short_decription_ru;
  } else if (challage === "en") {
    NewData.name = data.name_en;
    NewData.capital = data.capital_en;
    NewData.short_decription = data.short_decription_en;
  }

  return (
    <div>
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
                <a href="single_listing.html">
                  {NewData.name}, {NewData.capital}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="offers_content">
              <div className="offers_price">
                {data.price1}$<span>10-kunga</span>
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
                {NewData.short_decription}
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
                  Ba'tafsil<span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="offer_reviews">
                <div className="offer_reviews_content">
                  <div className="offer_reviews_title">kun</div>
                  <div className="offer_reviews_subtitle">davomida</div>
                </div>
                <div className="offer_reviews_rating text-center">10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
