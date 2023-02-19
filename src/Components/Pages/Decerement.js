import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Decerement = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const count = select.CountReducer.count;
  const handleDecremenet = () => {
    dispatch({
      type: "COUNT_DECREMENT",
      payload: 1,
    });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={handleDecremenet}
        disabled={count == 0}
      >
        -
      </Button>
    </div>
  );
};
