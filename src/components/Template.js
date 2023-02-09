import React from "react";
import "./Template.css";

const Template = ({ children,  }) => {
  return (
    <div className="Template">
      <div className="title"> Todo List</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;