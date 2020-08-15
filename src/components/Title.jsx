import React from "react";

export default function Title({ children }) {
  return (
    <div className="section-heading">
      <h1 className="section-title">{children}</h1>
      <hr className="line" />
    </div>
  );
}
