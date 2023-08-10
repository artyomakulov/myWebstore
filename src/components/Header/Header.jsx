import React, { useEffect, useState } from "react";

import css from "../../styles/Header.module.css";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/LOGO.svg";
import avatar from "../../images/avatar.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatar: avatar });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={css.info}>
        <div className={css.user} onClick={handleClick}>
          <div
            className={css.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          ></div>
          <div className={css.username}>{values.name}</div>
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
          <Link to={ROUTES.CART} className={css.cart}>
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
