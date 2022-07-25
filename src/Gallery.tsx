import React from "react";

import bg from "./images/bg.jpeg";
import cute from "./images/cute.jpeg";
import friends from "./images/friends.jpeg";
import kiss from "./images/kiss.jpeg";
import mother from "./images/mother.jpeg";
import ny from "./images/ny.jpeg";
import oops from "./images/oops.jpeg";
import stack from "./images/stack.jpeg";
import tb from "./images/tb.jpeg";
import tired from "./images/tired.jpeg";
import "./Gallery.css";

const IMAGES = [
  { url: friends, caption: "Always surrounded by friends" },
  { url: bg, caption: "Always love!" },
  { url: stack, caption: "We're always watching" },
  { url: tb, caption: "..." },
  { url: mother, caption: "Such a good mom!" },
  { url: tired, caption: "We all need our breaks" },
  { url: ny, caption: "Can't tell what looks better 🤤" },
  { url: cute, caption: "We are cute!" },
  { url: oops, caption: "oops!" },
  { url: kiss, caption: "My favorite" },
];

export interface GalleryProps {}

export default function Gallery(props: GalleryProps): JSX.Element {
  return (
    <>
      <div className="announcement">Happy Anniversary! ❤️</div>
      <div className="images">
        {IMAGES.map(({ url, caption }) => (
          <div className="image" key={url}>
            <img src={url} />
            <div>{caption}</div>
          </div>
        ))}
      </div>
    </>
  );
}
