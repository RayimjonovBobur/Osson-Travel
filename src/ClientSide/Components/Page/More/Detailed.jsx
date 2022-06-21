import React, { useState } from "react";
import "./Detailed.scss";
import dubai from "../../../assets/Images/dubai.jpg";
import { DetaileDate } from "./DetailedData";
import { useDispatch } from "react-redux";
import hours_icon from "../../../assets/Images/24-hours.png"

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

  let animationClasses = isactive ? " active" : "";

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
                    className={`${animationClasses}`}
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
                    <div className="tours-tabs__info__item__content">
                      <div className="tours-tabs__info__item__icon">
                        <img src={hours_icon} alt="" />
                      </div>
                      h5.tours-tabs__info__item__title
                    </div>
                  </div>
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
