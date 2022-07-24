import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { addProduct } from "../firebase";
import { Product } from "../types";
import "./form.css";

export interface ProductFormProps {}

export default function ProductForm(props: ProductFormProps): JSX.Element {
  const { register, handleSubmit } = useForm<Product>();
  const navigate = useNavigate();

  async function onSubmit(data: Product): Promise<void> {
    await addProduct(data);
    navigate("/");
  }

  return (
    <div className="product-form">
      <div className="title">Add new product!</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input placeholder="Name" required={true} {...register("name")} />
        </div>
        <div className={"input"}>
          <input placeholder="URL" required={true} {...register("url")} />
        </div>
        <div className="input">
          <input
            placeholder="Price"
            min={0}
            step={0.01}
            required={true}
            type="number"
            {...register("price", { valueAsNumber: true })}
          />
        </div>
        <div className="input">
          <input
            placeholder="Rating"
            min={0}
            max={10}
            required={true}
            type="number"
            {...register("rating", { valueAsNumber: true })}
          />
        </div>
        <div className="input">
          <textarea placeholder="Notes" {...register("notes")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
