import { useSelector, useDispatch } from "react-redux";
import { buyCakeAction } from "../redux/actions";

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.buyCakeReducer.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes - {numOfCakes}</h1>
      <button
        onClick={() => dispatch(buyCakeAction())}
        disabled={numOfCakes === 0}
      >
        Buy Cake
      </button>
    </div>
  );
};

export default CakeContainer;
