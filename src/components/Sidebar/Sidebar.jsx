import React from "react";
import css from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className={css.sidebar}>
      <div className={css.title}>CATEGORIES</div>
      <nav>
        <ul className={css.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={css.footer}>
        <a href="/help" target="blank" className={css.link}>
          HELP
        </a>
        <a
          href="/terms"
          target="blank"
          className={css.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
