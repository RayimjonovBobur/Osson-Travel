import React, { useEffect, useState } from "react";
import "./Detailed.scss";
import dubai from "../../../assets/Images/dubai.jpg";
import { DetaileDate } from "./DetailedData";
import { Ri24HoursFill } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { IoManSharp } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Istanbul from "../../../assets/Images/istanbul.jpg";
import kappadokiya from "../../../assets/Images/kappadokija.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import item1 from "../../../assets/Images/item1.jpg";
import item2 from "../../../assets/Images/item2.jpg";
import item3 from "../../../assets/Images/item3.jpg";
import item4 from "../../../assets/Images/item4.jpg";
import Footer from "../../Footer/Footer";
import Modal from "react-modal";
import { Close } from "../../../assets/Icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import i18n from "i18next";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    width: "25%",
  },
};

const Detailed = () => {
  const { t } = useTranslation();
  const challage = i18n.language;
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [name, setName] = useState([]);
  const [surName, setSurName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const NewData = {};

  const [activeTab, setActiveTab] = useState(0);
  const [openDate, setOpenDate] = useState(true);
  const [openDate2, setOpenDate2] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [isReady, setIsReady] = useState(null);

  let subtitle;

  const handleLink = (i) => {
    setActiveTab(i);
    setOpenDate(!openDate);
    setOpenDate2(!openDate2);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios
      .get(`https://ossontravel.pythonanywhere.com/api/places/${id}/ `)
      .then((res) => {
        setItemData(res.data.images);
        setItem(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (challage === "uz") {
    NewData.name = item.name_uz;
    NewData.capital = item.capital_uz;
    NewData.duration = item.duration_uz;
    NewData.leaving_days = item.leaving_days_uz;
    NewData.coming_back_days = item.coming_back_days_uz;
    NewData.included = item.included_uz;
    NewData.not_include = item.not_include_uz;
    NewData.daily_plans = item.daily_plans_uz;
    NewData.short_decription = item.short_decription_uz;
    NewData.price1_desc = item.price1_desc_uz;
    NewData.price2_desc = item.price2_desc_uz;
    NewData.price3_desc = item.price3_desc_uz;
    NewData.full_decription = item.full_decription_uz;
  } else if (challage === "ru") {
    NewData.name = item.name_ru;
    NewData.capital = item.capital_ru;
    NewData.duration = item.duration_ru;
    NewData.leaving_days = item.leaving_days_ru;
    NewData.coming_back_days = item.coming_back_days_ru;
    NewData.included = item.included_ru;
    NewData.not_include = item.not_include_ru;
    NewData.daily_plans = item.daily_plans_ru;
    NewData.short_decription = item.short_decription_ru;
    NewData.short_decription = item.short_decription_ru;
    NewData.price1_desc = item.price1_desc_ru;
    NewData.price2_desc = item.price2_desc_ru;
    NewData.price3_desc = item.price3_desc_ru;
    NewData.full_decription = item.full_decription_ru;
  } else if (challage === "en") {
    NewData.name = item.name_en;
    NewData.capital = item.capital_en;
    NewData.duration = item.duration_en;
    NewData.leaving_days = item.leaving_days_en;
    NewData.coming_back_days = item.coming_back_days_en;
    NewData.included = item.included_en;
    NewData.not_include = item.not_include_en;
    NewData.daily_plans = item.daily_plans_en;
    NewData.short_decription = item.short_decription_en;
    NewData.short_decription = item.short_decription_en;
    NewData.price1_desc = item.price1_desc_en;
    NewData.price2_desc = item.price2_desc_en;
    NewData.price3_desc = item.price3_desc_en;
    NewData.full_decription = item.full_decription_en;
  }

  const PathPayme = (e) => {
    e.preventDefault();
    const axios = require("axios");
    const data = JSON.stringify({
      amount: item.price1,
      customer_full_name: `${name} ${surName}`,
      customer_passport: "AA1112233",
      customer_phone_number: phone,
      place: item.id,
    });

    const config = {
      method: "post",
      url: "https://ossontravel.pythonanywhere.com/api/order/new/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const paymentCheckoutUrl = `https://ossontravel.pythonanywhere.com/api/payment/click-url/`;
    function getCheckoutUrl(data) {
      axios
        .post(paymentCheckoutUrl, data)
        .then((response) => window.location.assign(response.data.click_url));
    }

    axios(config).then(
      (response) => {
        if (response.status === 201) {
          const data = {
            order_id: response.data.id,
            return_url: `https://ossontravel.uz/detailed/${item.id}`,
          };
          getCheckoutUrl(data);
        }
        console.log(JSON.stringify(response.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const Submit = (event) => {
    // event.currentTarget.disabled = true;
  };

  return (
    <>
      <div className="super_container">
        <div className="detailed-con">
          <div
            className="detailed-background-image parallax-window"
            data-parallax="scroll"
            style={{ backgroundImage: `url(${dubai})` }}
          >
            <div className="detailed_content-header">
              <div className="detailed_title-birnchi">
                <h1>
                  {NewData.name}, {NewData.capital}
                </h1>
                <h3>
                  Hayotingizning har bir daqiqasini qiziqarli va unutilmas
                  o'tkazishga odatlaning!
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="detailed-content">
          <Tabs>
            <div className="row tour-single-rise">
              <main className="col-md-9">
                <div className="tours-tabs">
                  <TabList className="nav nav-tabs hidden-xs">
                    {DetaileDate.map((item, i) => (
                      <Tab>
                        <button
                          className={activeTab === i ? "active" : ""}
                          onClick={() => handleLink(i)}
                        >
                          {item.headerTitle}{" "}
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <div className="tab-content hidden-xs">
                  <TabPanel>
                    <div className="tab-pane active">
                      <div className="tours-tabs__info">
                        <div className="tours-tabs__info__item">
                          <div className="tours-tabs__info__item__content d-flex">
                            <div className="tours-tabs__info__item__icon">
                              <Ri24HoursFill />
                            </div>
                            <div className="mx-4">
                              <div className="tours-tabs__info__item__title">
                                {NewData.duration}
                              </div>
                              <div className="tours-tabs__info__item__description">
                                Kunlar soni
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="tours-tabs__info__item">
                          <div className="tours-tabs__info__item__content d-flex">
                            <div className="tours-tabs__info__item__icon">
                              <IoManSharp />
                            </div>
                            <div className="mx-4">
                              <div className="tours-tabs__info__item__title">
                                0+{" "}
                              </div>
                              <div className="tours-tabs__info__item__description">
                                Yoshi
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="tours-tabs__info__item">
                          <div className="tours-tabs__info__item__content d-flex">
                            <div className="tours-tabs__info__item__icon">
                              <GoCalendar />
                            </div>
                            <div className="mx-4">
                              <div className="tours-tabs__info__item__title">
                                Aprel – Oktyabr
                              </div>
                              <div className="tours-tabs__info__item__description">
                                Mavsum
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tours-tabs__content padding-all">
                        <h2>
                          <strong>{t("meaningful journey")}</strong>
                        </h2>
                        <p>
                          <span></span>
                        </p>
                        <table
                          style={{ height: "233px", width: "844px" }}
                          className="table table-bordered tours-tabs__table"
                        >
                          <tbody>
                            <tr>
                              <td style={{ width: "184px" }}>
                                <strong>{t("departure")}</strong>
                              </td>
                              <td style={{ width: "660px" }}>
                                {NewData.leaving_days}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: "184px" }}>
                                <strong>{t("return")}</strong>
                              </td>
                              <td style={{ width: "660px" }}>
                                {NewData.coming_back_days}
                              </td>
                            </tr>{" "}
                            <tr>
                              <td style={{ width: "184px" }}>
                                <strong>VIZA</strong>
                              </td>
                              <td style={{ width: "660px" }}>
                                {t("viza-info")}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p></p>
                        <p>
                          <strong>&nbsp;</strong>
                        </p>
                        <p>
                          <strong>{t("price included")}</strong>
                        </p>
                        <div
                          className="included-ul-content"
                          dangerouslySetInnerHTML={{
                            __html: NewData.included,
                          }}
                        >
                          {/* <li>
                            <img src={travel} alt="" />{" "}
                            aeroport-mehmonxona-aeroport guruh bo‘lib transferi
                          </li>
                          <li>
                            <img src={travel} alt="" /> nonushtalarni o‘z ichiga
                            oluvchi mehmonxonada 3 kecha yashash
                          </li>
                          <li>
                            <img src={travel} alt="" /> guruh bo‘lib piyoda
                            sayohat
                          </li> */}
                        </div>
                        <p>&nbsp;</p>
                        <h5>
                          <strong>{t("price not included")}</strong>
                        </h5>
                        <ul
                          className="extra"
                          dangerouslySetInnerHTML={{
                            __html: NewData.not_include,
                          }}
                        >
                          {/* <li>
                            <img src={travel} alt="" />
                            Aviaparvoz (Kattalar{" "}
                            <strong>4.770.000 so‘mdan boshlab</strong>; Bolalar{" "}
                            <strong> 4.055.000 so‘mdan boshlab</strong>)
                          </li>{" "}
                          <li>
                            <img src={travel} alt="" />
                            Tibbiy sug‘urta (+COVID-19 kiritilgan) sayohat
                            davrida 1 kishi uchun
                            <strong>35.000 so‘m </strong>(oilalarga chegirmalar
                            taqdim qilinadi!)
                          </li>{" "}
                          <li>
                            <img src={travel} alt="" />
                            Firma xizmatlari 1 kishi uchun
                            <strong>200 000 so‘m</strong>
                          </li>
                          <li>
                            <img src={travel} alt="" />
                            Shaxsiy xarajatlar
                          </li> */}
                        </ul>
                        <p>
                          <strong>{t("calculation")}</strong>
                        </p>
                        <p>
                          <strong>{t("payment rate")}</strong>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <strong>{t("travel company")}</strong>
                        </p>
                      </div>
                    </div>{" "}
                  </TabPanel>
                  <TabPanel>
                    <div className="tab-pance">
                      <div className="tours-tabs__content padding-all">
                        <div className="timeline">
                          <div className="timeline__item">
                            <div className="timeline__item__icon-wrap">
                              <div className="timeline__item__icon">
                                <div className="timeline__item__icon__text">
                                  1
                                </div>
                              </div>
                            </div>
                            <div className="timeline__item__content padding-left">
                              <h3 className="timeline__item__title"></h3>
                              <div
                                className="timeline__item__description"
                                dangerouslySetInnerHTML={{
                                  __html: NewData.daily_plans,
                                }}
                              ></div>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    {isReady ? (
                      <div className="tours-tabs__content padding-all">
                        {/* {item.map((data, i) => (
                          <AboutPlace item={data} challage={challage} key={i} />
                        ))} */}
                        <div>
                          <p>{NewData.short_decription}</p>
                          <p>
                            <img
                              src={item.picture4}
                              alt=""
                              className="size-full wp-image-2463 aligncenter"
                              width="800"
                              height="450"
                            />
                          </p>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: NewData.full_decription,
                          }}
                        ></p>
                        <p>
                          <img
                            src={item.picture3}
                            alt=""
                            className="size-full wp-image-2791 aligncenter"
                          />
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </TabPanel>
                  <TabPanel>
                    <div className="tours-tabs__content padding-all">
                      <p>{NewData.price1_desc}</p>
                      <p>{NewData.price2_desc}</p>
                      <p>{NewData.price3_desc}</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tours-tabs__content padding-all">
                      <div className="row product-thumbnails">
                        <div className="col-md-12">
                          <a
                            className="woocommerce-main-image swipebox"
                            href="https://travelsystem.uz/wp-content/uploads/2021/06/turkiya-osmani.jpg"
                            title="Usmonli sultonlar va ularning lolalari"
                          >
                            <img
                              width="1920"
                              href="800"
                              src={dubai}
                              alt=""
                              className="attachment-full size-full wp-post-image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-thumbnails columns-3">
                        <div className="col-sm-3 col-xs-4 product-thumbnails__item">
                          <a href="https://travelsystem.uz/wp-content/uploads/2021/06/tur-v-stambul-iz-tashkenta16-1-180x120.jpg">
                            <img src="" alt="" />
                          </a>
                        </div>
                        <div className="row product-item-foto">
                          <div className="col-6">
                            <LazyLoadImage
                              className="resultImage"
                              src={item1}
                              effect="blur"
                              delayTime="300"
                              height="150"
                            />
                          </div>
                          <div className="col-6">
                            <LazyLoadImage
                              className="resultImage"
                              src={item2}
                              effect="blur"
                              delayTime="300"
                            />
                          </div>
                          <div className="col-6">
                            <LazyLoadImage
                              className="resultImage"
                              src={item3}
                              effect="blur"
                              delayTime="300"
                            />
                          </div>
                          <div className="col-6">
                            <LazyLoadImage
                              className="resultImage"
                              src={item4}
                              effect="blur"
                              delayTime="300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </main>
              <aside className="col-md-3">
                <div className="order-container">
                  <div className="order-content">
                    <button className="btn-order" onClick={openModal}>
                      {t("order")}
                      <i className="order-icon"></i>
                    </button>
                    <div className="price-decoration block-after-indent mt-3">
                      <div className="price-description-content text-center">
                        <span className="woocommerce-Price-amount amount">
                          {item.price1} so'mdan
                        </span>
                      </div>
                      <div className="price-decoration__label">
                        <p>Bir kishi uchun</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Tabs>
        </div>
      </div>
      {/* MODAL */}
      <div className="modal">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="modal-contain p-1" onSubmit={(e) => PathPayme(e)}>
            <div className="form-contact__fields-short">
              <div className="d-flex">
                <h6 className="text-center">{t("order-modal")}</h6>{" "}
                <span onClick={closeModal} className="close-btn">
                  <Close />
                </span>
              </div>
              <div className="form-contact__item-short">
                <span className="form-control-wrap">
                  <input
                    type="text"
                    className="modal-form-input"
                    placeholder={t("name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>{" "}
              <div className="form-contact__item-short">
                <span className="wpcf7-form-control-wrap your-name">
                  <input
                    type="text"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-validation-item"
                    placeholder={t("surname")}
                    value={surName}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                </span>
              </div>
            </div>
            <div className="form-contact__fields-short">
              <div className="wpcf7-form-control-wrap your-mail">
                <input
                  type="email"
                  placeholder={t("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>{" "}
            <div className="form-contact__fields-short">
              <div className="wpcf7-form-control-wrap your-mail">
                <InputMask
                  mask={"+\\9\\9\\8\\ 99 999 99 99"}
                  placeholder={t("phone")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <p>
              <span className="atbtn atbtn--input-wrap text-center justify-content-center m-auto">
                <i className="atbtn__icon fa fa-paper-plane"></i>
                <input
                  type="submit"
                  value={t("order")}
                  className="modal-button"
                  onClick={Submit()}
                />
              </span>
            </p>
          </form>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Detailed;
