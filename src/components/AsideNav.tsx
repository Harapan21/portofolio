import React from "react";
import SideTabs from "./SideTabs";

export default function AsideNav({ setTabs }: any) {
  function handleTabs(event: any) {
    setTabs({ index: parseInt(event.target.id) });
  }
  return (
    <div className="aside right">
      <ul className="sideNav">
        <SideTabs id={3} onClick={handleTabs}>
          Contact
        </SideTabs>
        <SideTabs id={2} onClick={handleTabs}>
          Portofolio
        </SideTabs>
        <SideTabs id={1} onClick={handleTabs}>
          About
        </SideTabs>
        <SideTabs id={0} onClick={handleTabs}>
          Home
        </SideTabs>
      </ul>
    </div>
  );
}
