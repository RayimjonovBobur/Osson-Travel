import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/trevel-logo.svg";
import "./Header.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import uzb from "../../assets/Images/flagUzb.png";
import rus from "../../assets/Images/flagRu.png";
import eng from "../../assets/Images/flagEng.png";

const Header = () => {
  const languages = [
    {
      code: "uz",
      icon: uzb,
    },
    {
      code: "en",
      icon: eng,
    },
    {
      code: "ru",
      icon: rus,
    },
  ];
  const { t } = useTranslation();

  return (
    <div className="contaisner">
      <header className="header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li className="main_nav_item">
                <Link to="/"> {t("main")}</Link>
              </li>
              <li className="main_nav_item">
                <Link to="/about">{t("about")} </Link>
              </li>
              <li className="main_nav_item">
                <Link to="/offers">{t("all types")}</Link>
              </li>
              <li className="main_nav_item">
                <Link to="/news">{t("news")}</Link>
              </li>
              <li className="main_nav_item">
                <Link to="/contact">{t("contact")}</Link>
              </li>
              <li className="nav-item dropdown main_nav_item">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={33}
                    fill="currentColor"
                    className="bi bi-globe"
                    viewBox="0 0 16 16"
                    style={{ color: "#fff", marginBottom: "-8px" }}
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                </span>
                <div
                  className="dropdown-menu dropdown-menu-end animate slideIn"
                  aria-labelledby="navbarDropdown"
                >
                  {languages.map(({ code, icon }) => (
                    <li
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage(code)}
                    >
                      <img src={icon} alt="" />
                    </li>
                  ))}
                </div>
              </li>{" "}
              <li className="main_nav_item">
                <form class="form-inline my-2 my-lg-0">
                  <div className="search-heassder">
                    <label>
                      <input type="text" required />
                    </label>
                  </div>
                </form>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="menu trans_500">
        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <div className="menu_close_container">
            <div className="menu_close"></div>
          </div>
          <div className="logo menu_logo">
            <a href="/">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <ul>
            <li className="menu_item">
              <a href="index.html">{t("main")} </a>
            </li>
            <li className="menu_item">
              <a href="/">{t("about")}</a>
            </li>
            <li className="menu_item">
              <Link to="/offers">{t("all types")} </Link>
            </li>
            <li className="menu_item">
              <Link to="/news">{t("news")} </Link>
            </li>
            <li className="menu_item">
              <a href="contact.html">{t("contact")} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
