import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {

  // Local React state (ONLY for input)
  const [amount, setAmount] = useState(5);

  // useDispatch gives a function to SEND actions to Redux
  const dispatch = useDispatch();

  // useSelector is used to READ data from Redux store
  // state = ENTIRE Redux store
  // state.counter.value = the number we want
  const count = useSelector(state => state.counter.value);

  return (
    <div className="container">

      <div className="display">
        {/* Display Redux value */}
        <h1>{count}</h1>
      </div>

      <div className="first">

        {/* Increase value by 1 */}
        <button onClick={() => {
          dispatch(increment());
        }}>
          Increment
        </button>

        {/* Decrease value by 1 */}
        <button onClick={() => {
          dispatch(decrement());
        }}>
          Decrement
        </button>

        {/* Input value stored in local React state */}
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* Increase value by given amount */}
        <button onClick={() => {
          dispatch(incrementByAmount(Number(amount)));
        }}>
          Increment by {amount}
        </button>

      </div>

    </div>
  );
};

export default App;

/*
useDispatch() // useDispatch helps u to change the value
useSelector() // useSelector helps u to display the value 
*/