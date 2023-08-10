import React, { useEffect, useState } from "react";
import css from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const SIZES = [42, 43, 44, 45, 46];

const Product = ({ title, images, price, description }) => {
  // const currentImage = images[0];

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage([images[0]]);
  }, [images]);

  return (
    <section className={css.product}>
      <div className={css.images}>
        <div
          className={css.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={css["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={css.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => {
                setCurrentImage(image);
              }}
            />
          ))}
        </div>
      </div>
      <div className={css.info}>
        <h1 className={css.title}>{title}</h1>
        <div className={css.price}>{price}$</div>
        <div className={css.color}>
          <span>Color:</span>White
        </div>
        <div className={css.sizes}>
          <span>Sizes</span>
          <div className={css.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${css.size} ${
                  currentSize === size ? css.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={css.description}>{description}</p>

        <div className={css.actions}>
          <button className={css.add} disabled={!currentSize}>
            Add to cart
          </button>
          <button className={css.favorite}>Add to favorite</button>
        </div>
        <div className={css.bottom}>
          <div className={css.purchase}>19 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
