import React, { useState } from "react";
import "./Detailed.scss";
import dubai from "../../../assets/Images/dubai.jpg";
import { DetaileDate } from "./DetailedData";
import { useDispatch } from "react-redux";
import hours_icon from "../../../assets/Images/24-hours.png";
import { Ri24HoursFill } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { IoManSharp } from "react-icons/io5";
import travel from "../../../assets/Images/TRAVELSYSTEM.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Istanbul from "../../../assets/Images/istanbul.jpg";
import kappadokiya from "../../../assets/Images/kappadokija.jpg";

const Detailed = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openDate, setOpenDate] = useState(true);
  const [openDate2, setOpenDate2] = useState(false);
  const dispatch = useDispatch();

  const handleLink = (i) => {
    setActiveTab(i);
    setOpenDate(!openDate);
    setOpenDate2(!openDate2);
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
                        <strong>
                          DASTUR BO‘YICHA QATNOVLAR: Dushanba / Juma
                        </strong>
                      </p>
                      <p>
                        <strong>&nbsp;</strong>
                      </p>
                      <p>
                        <strong>NARXGA KIRITILGAN:</strong>
                      </p>
                      <ul className="included-ul-content">
                        <li>
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
                          Tibbiy sug‘urta (+COVID-19 kiritilgan) sayohat davrida
                          1 kishi uchun
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
                        </li>
                      </ul>
                      <p>
                        <strong>
                          P.S. Istalgan sayyohlar soni uchun individual
                          hisob-kitob qilish imkoniyati bor.
                        </strong>
                      </p>
                      <p>
                        <strong>
                          Narxlar taxminiy ko‘rsatilgan va to‘lov vaqtidagi
                          kursga qarab o‘zgarishi mumkin.
                        </strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        <strong>
                          Sayyohlik firmasi dasturga o‘zgartirishlar va/yoki
                          qo‘shimchalar kiritish, turlar ketma-ketligi va
                          kunlarini o‘zgartirish huquqini o‘zida saqlab qoladi.
                        </strong>
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
                            <h3 className="timeline__item__title">1-kun</h3>
                            <div className="timeline__item__description">
                              <p>
                                Istanbulga uchib kelish. Aeroportdan
                                mehmonxonaga transfer.
                              </p>
                              <p>Mehmonxonaga joylashish, bo‘sh vaqt.</p>
                              <p>
                                Xohishga qarab qo‘shimcha to‘lov
                                evaziga:Xohishga qarab qo‘shimcha to‘lov
                                evaziga:
                              </p>
                              <p>
                                Bosforga ajoyib manzara ochiluvchi Galata
                                ko‘prigidagi baliq restoranida kechki ovqat.
                              </p>
                              <p>
                                Tungi Bosfor bo‘ylab kema sayohati (shou dastur,
                                kechki ovqat, spirtli/spirtsiz ichimliklar,
                                mehmonxonadan/ga transfer)
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="timeline__item">
                          <div className="timeline__item__icon-wrap">
                            <div className="timeline__item__icon">
                              <div className="timeline__item__icon__text">
                                2
                              </div>
                            </div>
                          </div>
                          <div className="timeline__item__content padding-left">
                            <h3 className="timeline__item__title">2-kun</h3>
                            <div className="timeline__item__description">
                              <p>Mehmonxonada nonushta.</p>
                              <p>
                                Bosfor panoramasi + Lolalar festivali guruh
                                bo‘lib ekskursiyasi
                              </p>
                              <p>14:30 Turning boshlanishi</p>
                              <p>
                                Bosfor bo‘ylab kemada sayohat, Qizlar minorasi
                                (tashqaridan), Rumeli Hisor qal’asi
                                (tashqaridan), Bosfor orqali ko‘prik, Amirxon
                                parki (lolalar festivali)
                              </p>
                              <p>
                                18:00 Sayohatning yakunlanishi, mehmonxonaga
                                transfer.
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="timeline__item">
                          <div className="timeline__item__icon-wrap">
                            <div className="timeline__item__icon">
                              <div className="timeline__item__icon__text">
                                3
                              </div>
                            </div>
                          </div>
                          <div className="timeline__item__content padding-left">
                            <h3 className="timeline__item__title">3-kun</h3>
                            <div className="timeline__item__description">
                              <p>Mehmonxonada nonushta.</p>
                              <p>
                                Bo‘sh kun. Shopping va qo‘shimcha ekskursiyalar
                                uchun imkoniyat
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="timeline__item">
                          <div className="timeline__item__icon-wrap">
                            <div className="timeline__item__icon">
                              <div className="timeline__item__icon__text">
                                4
                              </div>
                            </div>
                          </div>
                          <div className="timeline__item__content padding-left">
                            <h3 className="timeline__item__title">4-kun</h3>
                            <div className="timeline__item__description">
                              <p>
                                Mehmonxonada nonushta. Aeroportga transfer,
                                Istanbuldan uchib ketish
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tours-tabs__content padding-all">
                    <p>
                      <strong>ISTANBUL</strong> – sirli va muhtasham, sershovqin
                      va ertaknamo go‘zal Istanbul – bu Yevropa va Osiyo,
                      an’anaviy Sharq va zamonaviy G‘arb o‘rtasidagi ko‘prik.
                      O‘zining boy tarixi davomida u nomini bir necha marta
                      o‘zgartirishga va Rim, Vizantiya, Usmonlilar va Lotin
                      imperiyalarining poytaxti bo‘lishga ulgurdi.
                    </p>
                    <p>
                      <img
                        src={Istanbul}
                        alt=""
                        className="size-full wp-image-2463 aligncenter"
                        width="800"
                        height="450"
                      />
                    </p>
                    <p>
                      <strong>KAPPADOKIYA</strong> – siz geografik xaritadan
                      topa olmaydigan sirli joy. Antik davrga borib taqaluvchi
                      nom va ushbu provinsiyani o‘rab olgan sir-u sinoat
                      tarixning ajralmas qismi hisoblanadi. Million yillar avval
                      vulqondan chiqqan lava va tabiiy jarayonlar tufayli bu
                      yerda noyob, o‘zga sayyoranikiga o‘xshash, minglab tosh
                      qo‘ziqorinlar va turli xil rang hamda o‘lchamdagi
                      haykallardan iborat manzara yuzaga keldi. Mahalliy aholi
                      orasida keng tarqalgan rivoyatga ko‘ra, bu yerda
                      farishtalar yashaydi, deb hisoblanadi. Kappadokiyadagi har
                      bir yil – bu osmon ostidagi noyob, o‘ziga xos muzey.
                    </p>
                    <p>
                      <img
                        src={kappadokiya}
                        alt=""
                        className="size-full wp-image-2791 aligncenter"
                      />
                    </p>
                    <p>
                      Kappadokiyaga borganda beixtiyor boshqa sayyoraga tushib
                      qolgandek fikr uyg‘onadi – ko‘z o‘ngingizda namoyon
                      bo‘luvchi landshaftlar shu qadar betakror va hech narsaga
                      o‘xshamaydi. Bu yerda uchini qor qoplagan vulqonlar,
                      baland bo‘lmagan, alohida turgan tog‘lar, qoya massivlari
                      va farovon vodiylar bor.
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tours-tabs__content padding-all">
                    <p>
                      1 KISHI UCHUN NARX (2 KISHILIK GURUH): 17 000 000 so‘mdan
                      boshlab
                    </p>
                    <p>
                      1 KISHI UCHUN NARX (4 KISHILIK GURUH): 8 500 000 so‘mdan
                      boshlab
                    </p>
                    <p>
                      1 KISHI UCHUN NARX (6 KISHILIK GURUH): 6 500 000 so‘mdan
                      boshlab
                    </p>
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
                    <div className="row product-thumbnails columns-3">
                      <div className="col-sm-3 col-xs-4 product-thumbnails__item">
                        <a href="	https://travelsystem.uz/wp-content/uploads/2021/06/tur-v-stambul-iz-tashkenta16-1-180x120.jpg">
                          <img src="" alt="" />
                        </a>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          
                        </div>
                        <div className="col-md-4">
                          bit balo
                        </div>
                        <div className="col-md-4">yana shu bir balo</div>
                        <div className="col-md-4"></div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </main>{" "}
            <aside className="col-md-3">adasd</aside>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Detailed;
