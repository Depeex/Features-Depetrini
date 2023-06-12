import { inputTypes } from '../types/index';

const { setInputValue } = inputTypes;

const initialState = {
  inputValue: '',
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case setInputValue:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default inputReducer;
