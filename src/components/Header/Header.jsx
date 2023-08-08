import React from "react";

import css from "../../styles/Header.module.css";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/LOGO.svg";
import avatar from "../../images/avatar.svg";


const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={css.info}>
        <div className={css.user}>
          <div
            className={css.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className={css.username}>Guest</div>
        </div>
        <form className={css.form}>
          <div className={css.icon}>
            <svg className="icon">
              <use href="/sprite.svg#search" />
            </svg>
          </div>
          <div className={css.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={css.box}></div>}
        </form>
        <div className={css.account}>
          <Link to={ROUTES.HOME} className={css.favorites}>
          <svg className={css.icon_fav}>
              <use href="/sprite.svg#heart" />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={css.cart} >
          <svg className={css.icon_cart}>
              <use href="/sprite.svg#bag" />
            </svg>
            <span className={css.count}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
