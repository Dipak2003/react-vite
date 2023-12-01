import React from "react";

import { IncrementNumber, DecrementNumber } from "./SimpleFeatures";
import { useDispatch, useSelector } from "react-redux";
const SimpleProject1 = () => {
  const counterData = useSelector((state) => state.simplecounter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2 className="mx-2">Countere App : 1</h2>
        <div className="containers bg-gray-800 h-fit w-fit text-white">
          <p className="m-2 text-xl">counter : {counterData}</p>
          <button
            className="bg-slate-700 m-2 curosr-pointer p-2"
            onClick={() => dispatch(IncrementNumber())}
          >
            Increment (+1){" "}
          </button>
          <button
            className="bg-slate-700 m-2 curosr-pointer p-2"
            onClick={() => dispatch(DecrementNumber())}
          >
            Decrement (-1){" "}
          </button>
          <div className="continer-2 flex">
            <input type="text" />
            <button
              className="bg-slate-700 m-2 curosr-pointer p-2"
              onClick={() => dispatch(DecrementNumber())}
            >
              Decrement
            </button>
            <button
              className="bg-slate-700 m-2 curosr-pointer p-2"
              onClick={() => dispatch(DecrementNumber())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleProject1;
