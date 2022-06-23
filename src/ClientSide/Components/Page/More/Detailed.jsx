import React, { useState } from "react";
import "./Detailed.scss";
import dubai from "../../../assets/Images/dubai.jpg";
import { DetaileDate } from "./DetailedData";
import { useDispatch } from "react-redux";
import hours_icon from "../../../assets/Images/24-hours.png";
import { GoCalendar } from "react-icons/go";
import { Ri24HoursFill } from "react-icons/ri";
import { IoManSharp } from "react-icons/io5";
import travel from "../../../assets/Images/TRAVELSYSTEM.png";

const Detailed = () => {
  const [isactive, setActive] = useState(false);
  const dispatch = useDispatch();
  const active = 0;

  const handleLink = (i) => {
    setActive(!isactive);
    setActive((prevState) => {
      return { animate: !prevState.animate };
    });
  };

  // let animationClasses = isactive ? " active" : "";

  return (
    <div className="super_container">
      <div className="detailed-con">
        <div
          className="detailed-background-image parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${dubai})` }}
        >
          <div className="detailed_content-header">
            <div className="detailed_title-birnchi">
              <h1>BAAda All inslusive</h1>
              <h3>
                BAAga sayohatlar 2021-2022 | BAAda dam olish kunlari | AOE
                mehmonxonalari
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-content">
        <div className="row tour-single-rise">
          <main className="col-md-9">
            <div className="tours-tabs">
              <ul className="nav nav-tabs hidden-xs">
                {DetaileDate.map((item, i) => (
                  <li
                    // className={`${isactive ? "active" : ""}`}
                    // className={`${animationClasses}`}
                    onClick={handleLink}
                  >
                    <button>{item.headerTitle} </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content hidden-xs">
              <div className="tab-pane active">
                <div className="tours-tabs__info">
                  <div className="tours-tabs__info__item">
                    <div className="tours-tabs__info__item__content d-flex">
                      <div className="tours-tabs__info__item__icon">
                        <Ri24HoursFill />
                      </div>
                      <div className="mx-4">
                        <div className="tours-tabs__info__item__title">
                          8 kun 7 kecha
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
                        <div className="tours-tabs__info__item__title">0+ </div>
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
                    <strong>Manzali sayohat</strong>
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
                          <strong>JO‘NAB KETISH</strong>
                        </td>
                        <td style={{ width: "660px" }}>Seshanba, Juma</td>
                      </tr>
                      <tr>
                        <td style={{ width: "184px" }}>
                          <strong>QAYTIB KELISH</strong>
                        </td>
                        <td style={{ width: "660px" }}>Seshanba, Juma</td>
                      </tr>{" "}
                      <tr>
                        <td style={{ width: "184px" }}>
                          <strong>VIZA</strong>
                        </td>
                        <td style={{ width: "660px" }}>
                          Talab qilinmaydi, xorijga chiqish pasporti, uchib
                          ketishdan 72 soat oldin qilingan PZR test zarur
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>DASTUR BO‘YICHA QATNOVLAR: Dushanba / Juma</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>NARXGA KIRITILGAN:</strong>
                  </p>
                  <ul className="included-ul-content">
                    <li>
                      <img src={travel} alt="" /> aeroport-mehmonxona-aeroport
                      guruh bo‘lib transferi
                    </li>
                    <li>
                      <img src={travel} alt="" /> nonushtalarni o‘z ichiga
                      oluvchi mehmonxonada 3 kecha yashash
                    </li>
                    <li>
                      <img src={travel} alt="" /> guruh bo‘lib piyoda sayohat
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h5>
                    <strong>Sayohat narxiga kiritilmagan:</strong>
                  </h5>
                  <ul className="extra">
                    <li>
                      <img src={travel} alt="" />
                      Aviaparvoz (Kattalar{" "}
                      <strong>4.770.000 so‘mdan boshlab</strong>; Bolalar{" "}
                      <strong> 4.055.000 so‘mdan boshlab</strong>)
                    </li>{" "}
                    <li>
                      <img src={travel} alt="" />
                      Tibbiy sug‘urta (+COVID-19 kiritilgan) sayohat davrida 1
                      kishi uchun
                      <strong>35.000 so‘m </strong>(oilalarga chegirmalar taqdim
                      qilinadi!)
                    </li>{" "}
                    <li>
                      <img src={travel} alt="" />
                      Firma xizmatlari 1 kishi uchun
                      <strong>200 000 so‘m</strong>
                    </li>
                    <li>
                      <img src={travel} alt="" />
                      Shaxsiy xarajatlar
                    </li>
                  </ul>
                  <p>
                    <strong>
                      P.S. Istalgan sayyohlar soni uchun individual hisob-kitob
                      qilish imkoniyati bor.
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Narxlar taxminiy ko‘rsatilgan va to‘lov vaqtidagi kursga
                      qarab o‘zgarishi mumkin.
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      Sayyohlik firmasi dasturga o‘zgartirishlar va/yoki
                      qo‘shimchalar kiritish, turlar ketma-ketligi va kunlarini
                      o‘zgartirish huquqini o‘zida saqlab qoladi.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </main>
          <aside className="col-md-3">adasd</aside>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
