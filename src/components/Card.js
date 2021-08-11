import React from "react";
import Button from "./Button";
import "./Card.css";

export default function Card({ title, text, hasButton }) {
  return (
    <section className="Card">
      <h2>{title}</h2>
      <p>{text}</p>
      {hasButton && <Button />}
    </section>
  );
}
