import React from "react";
import css from "../../styles/Products.module.css";
import { Link } from "react-router-dom";

const Products = ({ title, style={}, products = [], amount }) => {
    const list = products.filter((_, i) => i < amount)
  return (
    <section className={css.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={css.list}>
        {list.map(
          ({ id, images, title, category: { name: categoryName }, price }) => (
            <Link to={`/products/${id}`} key={id} className={css.product}>
              <div
                className={css.image}
                style={{ backgroundImage: `url(${images[0]})` }}
              />
              <div className={css.wrapper}>
                <h3 className={css.title}>{title}</h3>
                <div className={css.category_name}>{categoryName}</div>
                <div className={css.info}>
                  <div className={css.prices}>
                    <div className={css.price}>{price}$</div>
                    <div className={css.oldPrice}>
                      {Math.floor(price * 1.2)}$
                    </div>
                  </div>
                  <div className={css.purchases}>
                    {Math.floor(Math.random() * 20 + 1)}
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Products;
