import React, { memo } from "react";

const Nav = (props) => {
  console.log("child");
  return (
    <div className="flex bg-[black] text-[white] h-12 justify-evenly  items-center ">
      <h1>{props.obj1.title}</h1>
      <h1>{props.obj2().title}</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>Work</h1>
    </div>
  );
};

export default memo(Nav);
