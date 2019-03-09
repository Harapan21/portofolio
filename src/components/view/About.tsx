import React from "react";
import asset from "../../../public/*.svg";
export default function About() {
  const { react, node, express, ps, ai, xd, sass } = asset;
  return (
    <>
      <div style={{ fontSize: 30 }}>
        “ SEORANG YANG ANTUSIAS DALAM DESIGN DAN PEMOGRAMAN “
      </div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h3>Tools</h3>
        <span className="svg-icon">
          <img src={react} />
          <img src={node} />
          <img src={express} />
          <img src={ps} />
          <img src={ai} />
          <img src={xd} />
          <img src={sass} />
        </span>
      </div>
    </>
  );
}
