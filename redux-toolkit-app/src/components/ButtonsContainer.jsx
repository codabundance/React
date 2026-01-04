import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const ButtonsContainer = () => {
  const number = useRef();
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const onDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const onAddNumber = () => {
    dispatch(counterActions.add(number.current.value));
  };

  const onPrivacyToggle = () => {
    dispatch(privacyActions.togglePrivacy());
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
