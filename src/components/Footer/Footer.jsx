import React from "react";

import css from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/LOGO.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className={css.footer}>
      <div className={css.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={css.rights}>
        developed by{" "}
        <a
          href="https://www.linkedin.com/in/artyomakulov/"
          target="blank"
          rel="noreferre"
        >
          Artem Akulov
        </a>
      </div>
      <div className={css.socials}>
        <a href="https://instagram.com/" target="blank" rel="noreferrer">
          <svg className={css.icon_cart}>
            <use href="/sprite.svg#instagram" />
          </svg>
        </a>
        <a href="https://www.facebook.com/" target="blank" rel="noreferrer">
          <svg className={css.icon_cart}>
            <use href="/sprite.svg#facebook" />
          </svg>
        </a>
        <a href="https://www.youtube.com/" target="blank" rel="noreferrer">
          <svg className={css.icon_cart}>
            <use href="/sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </section>
  );
};
