import React from "react";

import css from "../../styles/Header.module.css";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/LOGO.svg";
import avatar from "../../images/avatar.svg";
import search from "../../images/search.svg";
import heart from "../../images/heart.svg";
import bag from '../../images/bag.svg'

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
            <img src={search} alt="loop" />
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
            <img src={heart} alt="favorites"  className={css.icon_fav}/>
          </Link>
          <Link to={ROUTES.CART} className={css.cart} >
            <img src={bag} alt="bag" className={css.icon_cart}/>
            <span className={css.count}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
