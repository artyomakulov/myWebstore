import React from "react";
import css from "../../styles/Categories.module.css";
import { Link } from "react-router-dom";

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  console.log('list', list)
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      <div className={css.list}>
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className={css.item}>
            <div
              className={css.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={css.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
