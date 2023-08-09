import React from "react";

import css from "../../styles/Home.module.css";
import bg from "../../images/background.png";
const Poster = () => {
  return (
    <section className={css.home}>
      <div className={css.title}>BIG SALE 20%</div>
      <div className={css.product}>
        <div className={css.text}>
          <div className={css.subtitle}>the bestseller of 2023</div>
          <h1 className={css.head}>LENNON R2D2 WITH NVIDIA 5090 TI</h1>
          <button className={css.button}>Shop now</button>
        </div>
        <div className={css.image}>
            <img src={bg} alt="background"/>
        </div>
      </div>
    </section>
  );
};

export default Poster;
