import React from "react";

const Contact = () => {
  return (
    <div className="super_container">
      <div className="header">
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="phone">+45 345 3324 56789</div>
                <div className="social">
                  <ul className="social_list">
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="./">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="user_box ml-auto">
                  <div className="user_box_login user_box_link">
                    <a href="./">login</a>
                  </div>
                  <div claclassNamess="user_box_register user_box_link">
                    <a href="./">register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
