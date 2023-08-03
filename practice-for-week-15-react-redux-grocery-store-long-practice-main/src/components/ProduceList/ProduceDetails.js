import { addToCart } from "../../store/cart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(produce.id));
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={handleAddToCart} className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;