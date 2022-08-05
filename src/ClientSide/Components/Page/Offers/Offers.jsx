import React, { useEffect, useState } from "react";
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
import i18n from "i18next";
import axios from "axios";
import Cards from "./Cards";

const Offers = () => {
  const [item, setItems] = useState([]);
  const challage = i18n.language;
  const NewData = {};

  useEffect(() => {
    axios
      .get(`https://ossontravel.pythonanywhere.com/api/places/shuffle?count=3`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (challage === "uz") {
    NewData.name = item.name_uz;
    NewData.capital = item.capital_uz;
  } else if (challage === "ru") {
    NewData.name = item.name_ru;
    NewData.capital = item.capital_ru;
  } else if (challage === "en") {
    NewData.name = item.name_en;
    NewData.capital = item.capital_en;
  }

  return (
    <div className="super_container">
      <div className="offers-con">
        <div
          className="offers-background-image parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${about_background})` }}
        ></div>
        <div className="offers_content-header">
          <div className="offers_title-birnchi">Barcha turlar</div>
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
                {item.map((data) => (
                  <Cards data={data} />
                ))}
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
