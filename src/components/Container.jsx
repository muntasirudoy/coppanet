import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-[80%]" style={{ margin: "0 auto" }}>
      {children}
    </div>
  );
};

export default Container;
