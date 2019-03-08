import React from "react";

// component
import Logo from "./Logo";
import Aside from "./Aside";
import AsideNav from "./AsideNav";

export default function Layout(props: any) {
  const { children, setTabs } = props;
  return (
    <div className="fullwidth card" onScroll={() => console.log("c")}>
      <Logo />
      <Aside />
      <AsideNav setTabs={setTabs} />
      {children}
    </div>
  );
}
