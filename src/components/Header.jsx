import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <section className="header-top-container">
        <div className="header-tools-container">
          <div className="left">
            <div className="location-container">
              <img src="icons/location-tick.svg" alt="location" />
              <p>Location</p>
            </div>
            <img src="icons/line.svg" alt="divider" />
            <div className="language-container">
              <p>English 🇺🇸</p>
              <img src="icons/arrow-down.svg" alt="arrow" />
            </div>
          </div>

          <div className="right">
              <div className="search-container">
                <img src="icons/search-normal.svg" alt="search" />
                <p>Search</p>
              </div>
                <img src="icons/line.svg" alt="divider" />
              <div className="message-container">
                <img src="icons/messages.svg" alt="messages" />
                <p>Contact Us</p>
              </div>
          </div>
        </div>
      </section>

      <section className="header-bottom-container">
        <div className="header-tools-container header-bottom-tools-container">
          <div className="filter-container">
            <img src="icons/firstline.svg" alt="filter" />
          </div>

            <img src="icons/logo.svg" alt="logo" />

          <div className="header-option-container">
            <div className="like-container">
              <img src="icons/heart.svg" alt="like" />
            </div>
            <div className="cart-container">
              <img src="icons/shopping-cart.svg" alt="cart" />
            </div>

            <div className="profile-option-container">
              <div className="profile-container">
                <img src="icons/profile-circle.svg" alt="profile" />
              </div>
              <img src="icons/arrow-down.svg" alt="more" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
