import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./form.css";

export interface MakeupFormProps {}

export default function MakeupForm(props: MakeupFormProps): JSX.Element {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onSubmit(data: unknown): void {
    alert(data);
    navigate("/");
  }

  return (
    <div className="makeup-form">
      <div className="title">Add new product!</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <input placeholder="URL" {...register("url")} />
        <input placeholder="Price" type="number" {...register("Price")} />
        <input
          placeholder="Rating"
          type="number"
          {...register("Rating", { min: 0, max: 10 })}
        />
        <textarea
          placeholder="Notes"
          {...register("notes", { maxLength: 1000 })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
