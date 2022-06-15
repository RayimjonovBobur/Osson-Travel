import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./Contact.css";
import man from "../../../assets/Images/man.png";

const Contact = () => {
  return (
    <div className="super_container">
      <div class="home">
        <div
          class="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/contact_background.jpg"
        ></div>
        <div class="home_content">
          <div class="home_title">contact</div>
        </div>
      </div>

      <div class="contact_form_section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="contact_form_container">
                <div class="contact_title text-center">get in touch</div>
                <form
                  action="#"
                  id="contact_form"
                  class="contact_form text-center"
                >
                  <input
                    type="text"
                    id="contact_form_name"
                    class="contact_form_name input_field"
                    placeholder="Name"
                    required="required"
                    data-error="Name is required."
                  />
                  <input
                    type="text"
                    id="contact_form_email"
                    class="contact_form_email input_field"
                    placeholder="E-mail"
                    required="required"
                    data-error="Email is required."
                  />
                  <input
                    type="text"
                    id="contact_form_subject"
                    class="contact_form_subject input_field"
                    placeholder="Subject"
                    required="required"
                    data-error="Subject is required."
                  />
                  <textarea
                    id="contact_form_message"
                    class="text_field contact_form_message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required="required"
                    data-error="Please, write us a message."
                  ></textarea>
                  <button
                    type="submit"
                    id="form_submit_button"
                    class="form_submit_button button trans_200"
                  >
                    send message<span></span>
                    <span></span>
                    <span></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="about_image">
                <img src={man} alt="" />
              </div>
            </div>

            <div class="col-lg-4">
              <div class="about_content">
                <div class="logo_container about_logo">
                  <div class="logo">
                    <Link to="/">
                      <img src="images/logo.png" alt="" />
                      travelix
                    </Link>
                  </div>
                </div>
                <p class="about_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et
                  suscipit urna. Integer eleme ntum orci eu vehicula iaculis
                  consequat nisl. Nunc et suscipit urna pretium.
                </p>
                <ul class="about_social_list">
                  <li class="about_social_item">
                    <Link to="/">
                      <i class="fa-brands fa-pinterest"></i>
                    </Link>
                  </li>
                  <li class="about_social_item">
                    <Link to="/">
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li class="about_social_item">
                    <Link to="/">
                      <i class="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li class="about_social_item">
                    <Link to="/">
                      <i class="fa-brands fa-dribbble"></i>
                    </Link>
                  </li>
                  <li class="about_social_item">
                    <Link to="/">
                      <i class="fa-brands fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="about_info">
                <ul class="contact_info_list">
                  <li class="contact_info_item d-flex flex-row">
                    <div>
                      <div class="contact_info_icon">
                        <img src="images/placeholder.svg" alt="" />
                      </div>
                    </div>
                    <div class="contact_info_text">
                      4127 Raoul Wallenber 45b-c Gibraltar
                    </div>
                  </li>
                  <li class="contact_info_item d-flex flex-row">
                    <div>
                      <div class="contact_info_icon">
                        <img src="images/phone-call.svg" alt="" />
                      </div>
                    </div>
                    <div class="contact_info_text">2556-808-8613</div>
                  </li>
                  <li class="contact_info_item d-flex flex-row">
                    <div>
                      <div class="contact_info_icon">
                        <img src="images/message.svg" alt="" />
                      </div>
                    </div>
                    <div class="contact_info_text">
                      <a
                        href="mailto:contactme@gmail.com?Subject=Hello"
                        target="_top"
                      >
                        contactme@gmail.com
                      </a>
                    </div>
                  </li>
                  <li class="contact_info_item d-flex flex-row">
                    <div>
                      <div class="contact_info_icon">
                        <img src="images/planet-earth.svg" alt="" />
                      </div>
                    </div>
                    <div class="contact_info_text">
                      <a href="https://colorlib.com">www.colorlib.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="travelix_map">
        <div id="google_map" class="google_map">
          <div class="map_container">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1128218.9660308918!2d71.09381868941708!3d40.44570260203516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba35e21e649803%3A0xcd6937bf69229b68!2sFarg&#39;ona%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1655277286860!5m2!1suz!2s"
                width="1400"
                height="581"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
