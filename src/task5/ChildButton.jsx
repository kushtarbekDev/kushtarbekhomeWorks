import React from "react";
export const ChildButton = React.memo(({ onClick, label }) => {
  console.log("fsdkflksl");
  return (
    <div>
      <button onClick={onClick} style={{ marginTop: "20px" }}>
        {label} Kushtarbek
      </button>
    </div>
  );
});
