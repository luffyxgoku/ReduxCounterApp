import Count from "./Components/Count";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>
      <Count />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        DECREMENT
      </button>
    </div>
  );
}

export default App;
