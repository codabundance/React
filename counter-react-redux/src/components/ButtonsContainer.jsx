import { useRef } from "react";
import { useDispatch } from "react-redux";

const ButtonsContainer = () => {
  const number = useRef();
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const onAddNumber = () => {
    dispatch({ type: "ADD", number: number.current.value });
  };

  const onPrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onPrivacyToggle}
        >
          Privacy Toggle
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={onIncrementHandler}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onDecrementHandler}
        >
          Decrement
        </button>
        <button type="button" className="btn btn-warning" onClick={onAddNumber}>
          Add
        </button>
        <input
          type="text"
          ref={number}
          placeholder="Enter a number to add.."
        ></input>
      </div>
    </>
  );
};
export default ButtonsContainer;
