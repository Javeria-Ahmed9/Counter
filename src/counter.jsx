import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Counter() {
  let [val, setVal] = useState(0);
  let Add = () => {
    setVal((val = val + 1));
  };
  let Subtract = () => {
    if (val > 0) {
      setVal((val = val - 1));
    }
  };
  return (
    <div className="container" id="one">
      <header>Counter</header>
      <div id="two">
        <span>{val}</span>
        <footer>
          <button id="btn1" onClick={Add}>
            <IoMdAdd />
          </button>
          <button id="btn2" onClick={Subtract}>
            <RiSubtractLine />
          </button>
        </footer>
        <button onClick={() => setVal(0)} id="jp">
          Reset
        </button>
      </div>
    </div>
  );
}
