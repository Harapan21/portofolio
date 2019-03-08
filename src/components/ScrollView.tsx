import React from "react";

export default (props: any) => {
  return (
    <div className="section">
      <React.Suspense fallback={<div>Loading...</div>}>
        {props.children}
      </React.Suspense>
    </div>
  );
};
