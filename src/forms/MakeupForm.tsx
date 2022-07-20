import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { addMakeup } from "../firebase";
import { Makeup } from "../types";
import "./form.css";

export interface MakeupFormProps {}

export default function MakeupForm(props: MakeupFormProps): JSX.Element {
  const { register, handleSubmit } = useForm<Makeup>();
  const navigate = useNavigate();

  async function onSubmit(data: Makeup): Promise<void> {
    await addMakeup(data);
    navigate("/");
  }

  return (
    <div className="makeup-form">
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
