import React, { useState, useEffect } from "react";
import largeImg from "../../../public/iam.png";
import smallImg from "../../../public/iam-small.png";
export default function Home() {
  function handleImage() {
    // make new Image
    const img = new Image();

    //get image by className
    var target: any;
    target = document.getElementsByClassName("iam")[0];

    img.src = largeImg;
    img.onload = (): any => {
      target.src = largeImg;
      target.classList.add("loaded");
    };
  }
  useEffect(() => handleImage());
  return (
    <>
      <img className="iam" src={smallImg} />
      <div className="greeting">Welcome</div>
    </>
  );
}
