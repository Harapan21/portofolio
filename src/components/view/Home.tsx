import React, { useEffect, useState } from "react";
import largeImg from "../../../public/iam.png";
import smallImg from "../../../public/iam-small.png";

export default function Home() {
  const [isLoaded, setLoad] = useState(false);
  console.log(isLoaded);
  function handleImage() {
    // make new Image
    const img = new Image();

    //get image by className
    let _target: any;
    _target = document.getElementsByClassName("iam")[0];

    img.src = largeImg;
    img.onload = (): any => {
      _target.src = largeImg;
      setLoad(true);
    };
  }
  useEffect(() => {
    if (!isLoaded) {
      handleImage();
    }
  }, [isLoaded]);
  return (
    <>
      <img className={`iam ${isLoaded ? "loaded" : ""}`} src={smallImg} />
      <div className="greeting">Welcome</div>
    </>
  );
}
