import React from "react";
import { Link } from "react-router-dom";
import intro_1 from "../../../assets/Images/intro_1.jpg";
import i18n from "i18next";

const Card = ({ item, i }) => {
  const challage = i18n.language;
  const NewData = {};

  if (challage === "uz") {
    NewData.name = item.name_uz;
  } else if (challage === "ru") {
    NewData.name = item.name_ru;
  } else if (challage === "en") {
    NewData.name = item.name_en;
  }
  console.log(item.main_picture);
  return (
    <>
      <div className="col-lg-4 intro_col">
        <div className="intro_item">
          <div className="intro_item_overlay"></div>
          <div
            className="intro_item_background"
            style={{ backgroundImage: `url(${item.main_picture})` }}
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
              <h1>{NewData.name}</h1>
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
    </>
  );
};

export default Card;
