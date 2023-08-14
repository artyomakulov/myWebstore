import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import css from "../../styles/Category.module.css";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    ...defaultValues,
  };

  const [cat, setCat] = useState("");

  const [values, setValues] = useState(defaultValues);

  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!id) return;
    setParams({ ...defaultParams, categoryId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!id || !list.length) return;
    const { name } = list.find((item) => item.id === id * 1);
    setCat(name);
  }, [list, id]);

  const { data, isLoading, isSuccess } = useGetProductsQuery({
    categoryId: id,
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams({ ...params, ...values });
  };

  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>{cat}</h2>
      <form className={css.filters} onSubmit={handleSubmit}>
        <div className={css.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="product name"
            value={values.title}
          />
        </div>
        <div className={css.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
        </div>
        <div className={css.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
        </div>
        <button type="submit" hidden />
      </form>
      {isLoading ? (
        <div className="preloader">Loading</div>
      ) : !isSuccess || !data.length ? (
        <div className={css.back}>
          <span>No results</span>
          <button>reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={data}
          style={{ padding: 0 }}
          amount={data.length}
        />
      )}
    </section>
  );
};

export default Category;
