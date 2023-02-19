export const addQuantity = (arr) => {
  const res = arr.map((item) => {
    return { ...item, Quantity: 11, userQuantity: 0 };
  });
  return res;
};

export const handleIncrementQty = (arr, id) => {
  const res = arr.map((item) => {
    if (item.id == id) {
      return { ...item, userQuantity: item.userQuantity + 1 };
    } else {
      return item;
    }
  });
  return res;
};
export const handleDecrimentQty = (arr, id) => {
  const res = arr.map((item) => {
    if (item.id == id) {
      return { ...item, userQuantity: item.userQuantity - 1 };
    } else {
      return item;
    }
  });
  return res;
};
export const activateLoader = (dispatch) => {
  dispatch({
    type: "LOADER_ACTIVATE",
    payload: true,
  });
};
export const DeActivateLoader = (dispatch) => {
  dispatch({
    type: "LOADER_DE-ACTIVATE",
    payload: false,
  });
};
