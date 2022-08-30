import React from "react";

export const Links = ({ results }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "4rem",
        lineHeight: "4rem",
        textAlign: "center",
        border: "2px solid #A77979",
        marginTop: "1rem",
        fontSize: "32px",
        background: "#B9FFF8",
      }}
      className="link"
    >
      <a href={results}>{results}</a>
    </div>
  );
};
