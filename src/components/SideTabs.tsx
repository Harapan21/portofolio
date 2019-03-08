import React from "react";

export default (props: any) => {
  return <li {...props}>{props.children}</li>;
};
