import React from "react";
import bus from "../../assets/Images/bus.png";
import diving from "../../assets/Images/diving.png";
import island from "../../assets/Images/island.png";
import departure from "../../assets/Images/departure.png";
import suitcase from "../../assets/Images/suitcase.png";
import cruise from "../../assets/Images/cruise.png";

const Search = () => {
  return (
    <div className="super-container">
      <div className="search">
        <div className="container fill_height">
          <div className="row fill_height">
            <div className="col fill_height">
              <div className="search_tabs_container">
                <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                  <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={suitcase} alt="" />
                    <span>hotels</span>
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={bus} alt="" />
                    car rentals
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={departure} alt="" />
                    flights
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={island} alt="" />
                    trips
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={cruise} alt="" />
                    cruises
                  </div>
                  <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                    <img src={diving} alt="" />
                    activities
                  </div>
                </div>
              </div>

              {/* Search Panel */}

              <div className="search_panel active">
                <form
                  action="#"
                  id="search_form_1"
                  className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
                >
                  <div className="search_item">
                    <div>destination</div>
                    <input
                      type="text"
                      className="destination search_input"
                      required="required"
                    />
                  </div>
                  <div className="search_item">
                    <div>check in</div>
                    <input
                      type="text"
                      className="check_in search_input"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div className="search_item">
                    <div>check out</div>
                    <input
                      type="text"
                      className="check_out search_input"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div className="search_item">
                    <div>adults</div>
                    <select
                      name="adults"
                      id="adults_1"
                      className="dropdown_item_select search_input"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <div className="search_item">
                    <div>children</div>
                    <select
                      name="children"
                      id="children_1"
                      className="dropdown_item_select search_input"
                    >
                      <option>0</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <button className="button search_button">
                    search<span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
