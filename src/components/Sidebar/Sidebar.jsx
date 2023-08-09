import React from "react";
import css from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={css.sidebar}>
      <div className={css.title}>CATEGORIES</div>
      <nav>
        <ul className={css.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`/categories/${id}`}
                className={({ isActive }) =>
                  `${css.link} ${isActive ? css.active : ""}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
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
