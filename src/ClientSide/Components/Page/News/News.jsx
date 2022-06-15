import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import blog_background from "../../../assets/Images/blog_background.jpg";
import blog_1 from "../../../assets/Images/blog_1.jpg";
import blog_2 from "../../../assets/Images/blog_2.jpg";
import blog_3 from "../../../assets/Images/blog_3.jpg";
import latest_1 from "../../../assets/Images/latest_1.jpg";
import latest_2 from "../../../assets/Images/latest_2.jpg";
import latest_3 from "../../../assets/Images/latest_3.jpg";
import latest_4 from "../../../assets/Images/latest_4.jpg";
import gallery_1 from "../../../assets/Images/gallery_1.jpg";
import gallery_2 from "../../../assets/Images/gallery_2.jpg";
import gallery_3 from "../../../assets/Images/gallery_3.jpg";
import gallery_4 from "../../../assets/Images/gallery_4.jpg";
import gallery_5 from "../../../assets/Images/gallery_5.jpg";
import gallery_6 from "../../../assets/Images/gallery_6.jpg";
import Footer from "../../Footer/Footer";

const News = () => {
  return (
    <div className="super-container">
      <div class="home">
        <div
          class="home_background parallax-window"
          data-parallax="scroll"
          style={{ backgroundImage: `url(${blog_background})` }}
        ></div>
        <div class="home_content">
          <div class="home_title">the blog</div>
        </div>
      </div>

      <div class="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog_post_container">
                <div class="blog_post">
                  <div class="blog_post_image">
                    <img src={blog_1} alt="https://unsplash.com/@anniespratt" />
                    <div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div class="blog_post_day">01</div>
                      <div class="blog_post_month">Dec, 2017</div>
                    </div>
                  </div>
                  <div class="blog_post_meta">
                    <ul>
                      <li class="blog_post_meta_item">
                        <Link to="/">by Lore Papp</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">Uncategorized</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">3 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="blog_post_title">
                    <Link to="/">Try these new dream destinations</Link>
                  </div>
                  <div class="blog_post_text">
                    <p>
                      Aenean in lacus ligula. Phasellus euismod gravida eros.
                      Aenean nec ipsum aliquet, pharetra magna id, interdum
                      sapien. Etiam id lorem eu nisl pellentesque semper. Nullam
                      tincidunt metus placerat, suscipit leo ut, tempus nulla.
                      Fusce at eleifend tellus. Ut eleifend dui nunc, non
                      fermentum qua.
                    </p>
                  </div>
                  <div class="blog_post_link">
                    <Link to="/">read more</Link>
                  </div>
                </div>

                <div class="blog_post">
                  <div class="blog_post_image">
                    <img src={blog_2} alt="https://unsplash.com/@tschax" />
                    <div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div class="blog_post_day">01</div>
                      <div class="blog_post_month">Dec, 2017</div>
                    </div>
                  </div>
                  <div class="blog_post_meta">
                    <ul>
                      <li class="blog_post_meta_item">
                        <Link to="/">by Lore Papp</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">Uncategorized</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">3 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="blog_post_title">
                    <Link to="/">Try these new dream destinations</Link>
                  </div>
                  <div class="blog_post_text">
                    <p>
                      Aenean in lacus ligula. Phasellus euismod gravida eros.
                      Aenean nec ipsum aliquet, pharetra magna id, interdum
                      sapien. Etiam id lorem eu nisl pellentesque semper. Nullam
                      tincidunt metus placerat, suscipit leo ut, tempus nulla.
                      Fusce at eleifend tellus. Ut eleifend dui nunc, non
                      fermentum qua.
                    </p>
                  </div>
                  <div class="blog_post_link">
                    <Link to="/">read more</Link>
                  </div>
                </div>

                <div class="blog_post">
                  <div class="blog_post_image">
                    <img
                      src={blog_3}
                      alt="https://unsplash.com/@stilclassics"
                    />
                    <div class="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div class="blog_post_day">01</div>
                      <div class="blog_post_month">Dec, 2017</div>
                    </div>
                  </div>
                  <div class="blog_post_meta">
                    <ul>
                      <li class="blog_post_meta_item">
                        <Link to="/">by Lore Papp</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">Uncategorized</Link>
                      </li>
                      <li class="blog_post_meta_item">
                        <Link to="/">3 Comments</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="blog_post_title">
                    <Link to="/">Try these new dream destinations</Link>
                  </div>
                  <div class="blog_post_text">
                    <p>
                      Aenean in lacus ligula. Phasellus euismod gravida eros.
                      Aenean nec ipsum aliquet, pharetra magna id, interdum
                      sapien. Etiam id lorem eu nisl pellentesque semper. Nullam
                      tincidunt metus placerat, suscipit leo ut, tempus nulla.
                      Fusce at eleifend tellus. Ut eleifend dui nunc, non
                      fermentum qua.
                    </p>
                  </div>
                  <div class="blog_post_link">
                    <Link to="/">read more</Link>
                  </div>
                </div>
              </div>

              <div class="blog_navigation">
                <ul>
                  <li class="blog_dot active">
                    <div></div>01.
                  </li>
                  <li class="blog_dot">
                    <div></div>02.
                  </li>
                  <li class="blog_dot">
                    <div></div>03.
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 sidebar_col">
              <div class="sidebar_search">
                <form action="">
                  <input
                    id="sidebar_search_input"
                    type="search"
                    class="sidebar_search_input"
                    placeholder=""
                    required="required"
                  />
                  <button
                    id="sidebar_search_button"
                    type="submit"
                    class="sidebar_search_button trans_300"
                    value="Submit"
                  >
                    <svg
                      version="1.1"
                      id="Layer_1"
                      // xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="17px"
                      height="17px"
                      viewBox="0 0 512 512"
                      // enable-background="new 0 0 512 512"
                      // xml:space="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              class="mag_glass"
                              fill="FFFFFF"
                              d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
												s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
												C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
												M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
												c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              class="mag_glass"
                              fill="FFFFFF"
                              d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
												c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
												C-2.019,484.77-2.019,497.865,6.057,505.942z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </form>
              </div>

              <div class="sidebar_archives">
                <div class="sidebar_title">Archives</div>
                <div class="sidebar_list">
                  <ul>
                    <li>
                      <Link to="/">March 2017</Link>
                    </li>
                    <li>
                      <Link to="/">April 2017</Link>
                    </li>
                    <li>
                      <Link to="/">May 2017</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar_categories">
                <div class="sidebar_title">Categories</div>
                <div class="sidebar_list">
                  <ul>
                    <li>
                      <Link to="/">Travel</Link>
                    </li>
                    <li>
                      <Link to="/">Exotic Destinations</Link>
                    </li>
                    <li>
                      <Link to="/">City Breaks</Link>
                    </li>
                    <li>
                      <Link to="/">Travel Tips</Link>
                    </li>
                    <li>
                      <Link to="/">Lifestyle & Travel</Link>
                    </li>
                    <li>
                      <Link to="/">City Breaks</Link>
                    </li>
                    <li>
                      <Link to="/">Uncategorized</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar_latest_posts">
                <div class="sidebar_title">Latest Posts</div>
                <div class="latest_posts_container">
                  <ul>
                    <li class="latest_post clearfix">
                      <div class="latest_post_image">
                        <Link to="/">
                          <img src={latest_1} alt="" />
                        </Link>
                      </div>
                      <div class="latest_post_content">
                        <div class="latest_post_title trans_200">
                          <Link to="/">A simple blog post</Link>
                        </div>
                        <div class="latest_post_meta">
                          <div class="latest_post_author trans_200">
                            <Link to="/">by Jane Smith</Link>
                          </div>
                          <div class="latest_post_date trans_200">
                            <Link to="/">Aug 25, 2016</Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="latest_post clearfix">
                      <div class="latest_post_image">
                        <Link to="/">
                          <img src={latest_2} alt="" />
                        </Link>
                      </div>
                      <div class="latest_post_content">
                        <div class="latest_post_title trans_200">
                          <Link to="/">Dream destination for you</Link>
                        </div>
                        <div class="latest_post_meta">
                          <div class="latest_post_author trans_200">
                            <Link to="/">by Jane Smith</Link>
                          </div>
                          <div class="latest_post_date trans_200">
                            <Link to="/">Aug 25, 2016</Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="latest_post clearfix">
                      <div class="latest_post_image">
                        <Link to="/">
                          <img src={latest_3} alt="" />
                        </Link>
                      </div>
                      <div class="latest_post_content">
                        <div class="latest_post_title trans_200">
                          <Link to="/">Tips to travel light</Link>
                        </div>
                        <div class="latest_post_meta">
                          <div class="latest_post_author trans_200">
                            <Link to="/">by Jane Smith</Link>
                          </div>
                          <div class="latest_post_date trans_200">
                            <Link to="/">Aug 25, 2016</Link>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="latest_post clearfix">
                      <div class="latest_post_image">
                        <Link to="/">
                          <img src={latest_4} alt="" />
                        </Link>
                      </div>
                      <div class="latest_post_content">
                        <div class="latest_post_title trans_200">
                          <Link to="/">How to pick your vacation</Link>
                        </div>
                        <div class="latest_post_meta">
                          <div class="latest_post_author trans_200">
                            <Link to="/">by Jane Smith</Link>
                          </div>
                          <div class="latest_post_date trans_200">
                            <Link to="/">Aug 25, 2016</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="sidebar_gallery">
                <div class="sidebar_title">Instagram</div>
                <div class="gallery_container">
                  <ul class="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-0.3.5&s=c0996cd16eda8c6f54c398de02d03cd3&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_1}
                          alt="https://unsplash.com/@mantashesthaven"
                        />
                      </a>
                    </li>
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1495162048225-6b3b37b8a69e?ixlib=rb-0.3.5&s=861dd3c7b9d3e735d7fd7cbb1eefed64&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_2}
                          alt="https://unsplash.com/@kensuarez"
                        />
                      </a>
                    </li>
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1502646275263-04be86afa386?ixlib=rb-0.3.5&s=682a41d7d9bf6e3feabc73a5fdd61dd2&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_3}
                          alt="https://unsplash.com/@jakobowens1"
                        />
                      </a>
                    </li>
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1484820301304-0b43512779dc?ixlib=rb-0.3.5&s=7a3393e9f507fb4718c36337a8014c52&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_4}
                          alt="https://unsplash.com/@seefromthesky"
                        />
                      </a>
                    </li>
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-0.3.5&s=7e6b68b1911fb4ffeea4c0750b8a5269&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_5}
                          alt="https://unsplash.com/@deannaritchie"
                        />
                      </a>
                    </li>
                    <li class="gallery_item">
                      <a
                        class="colorbox"
                        href="https://images.unsplash.com/photo-1504434026032-a7e440a30b68?ixlib=rb-0.3.5&s=2cc35bf903b78ba4f7f7ed69bc2abe3f&auto=format&fit=crop&w=720&q=80"
                      >
                        <img
                          src={gallery_6}
                          alt="https://unsplash.com/@benobro"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
