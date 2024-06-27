import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/CounterSlice";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex  border border-purple-500 rounded-md bg-slate-100 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
