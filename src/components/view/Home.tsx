import React, { useEffect, useState } from "react";
import largeImg from "../../../public/iam.png";
import smallImg from "../../../public/iam-small.png";

export default function Home() {
  function handleImage() {
    // make new Image
    const img = new Image();

    //get image by className
    let _target: any;
    _target = document.getElementsByClassName("iam")[0];

    img.src = largeImg;
    img.onload = (): any => {
      _target.src = largeImg;
      _target.classList.add("loaded");
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
