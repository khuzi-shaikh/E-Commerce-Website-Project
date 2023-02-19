const initialState = {
  carData: [],
};

export const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CAR_DATA":
      return {
        ...state,
        carData: action.payload,
      };
      break
  }
  return state
};
