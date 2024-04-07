import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let handleClickx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let handleClicky = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(function print() {
    console.log("Effect: occues in first render. no dependencies");
  }, []);

  useEffect(
    function print() {
      console.log("Effect: occurs when countx changes");
    },
    [countx]
  );

  useEffect(
    function print() {
      console.log("Effect: occurs for countx & county. 2 dependencies");
    },
    [countx, county]
  );

  return (
    <div>
      <h3>CounterX ={countx} </h3>
      <button onClick={handleClickx}>+1</button>
      <h3>CounterY ={county} </h3>
      <button onClick={handleClicky}>+1</button>
    </div>
  );
}
