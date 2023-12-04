import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/style.scss";
const Header = () => {
  return (
    <header>
      <div className="top-menu">
        <div class="menu-left">
          <a href="#">Visit Us</a>
          <a href="#">Online Support</a>
        </div>
        <div class="menu-right">
          <ul class="list header_socila">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-nav">
        <div className="nav-logo">
            <a href=""><img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" /></a>
        </div>
        <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/pages">Pages</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>
      <div className="banner-inner">
      <div class="row">
<div class="col-lg-8">
<div class="banner_content">
<h2>Precise concept design <br/> for stylish living</h2>
<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
<a class="banner_btn" href="#">Get Started</a>
</div>
</div>
<div class="col-lg-4">
<div class="home_right_box">
<div class="home_item">
<i class="flaticon-sofa"></i>
</div>
<div class="home_item">
<i class="flaticon-bed"></i>
</div>
<div class="home_item">
<i class="flaticon-computer"></i>
</div>
<div class="home_item">
<i class="flaticon-mirror"></i>
</div>
<div class="home_item">
<i class="flaticon-closet"></i>
</div>
<div class="home_item">
<i class="flaticon-kitchen"></i>
</div>
</div>
</div>
</div>
      </div>
    </header>
  );
};

export default Header;
