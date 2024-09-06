import React from "react";
import { useSelector } from "react-redux";

function Count() {
  const count = useSelector((state) => state);
  return <h1>{count}</h1>;
}

export default Count;
