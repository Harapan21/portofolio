import React from "react";
import SideTabs from "./SideTabs";
import { TabsContextConsumer } from "./context/TabsContext";

export default function AsideNav({ setTabs }: any) {
  function handleTabs(index: any) {
    setTabs({ index });
  }
  return (
    <TabsContextConsumer>
      {({ index }: any) => (
        <div className="aside right">
          <ul className="sideNav">
            <SideTabs onClick={() => handleTabs(3)}>Contact</SideTabs>
            <SideTabs onClick={() => handleTabs(2)}>Portofolio</SideTabs>
            <SideTabs onClick={() => handleTabs(1)}>About</SideTabs>
            <SideTabs onClick={() => handleTabs(0)}>Home</SideTabs>
          </ul>
        </div>
      )}
    </TabsContextConsumer>
  );
}
