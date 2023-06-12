import { inputTypes } from '../types';

const { setInputValue } = inputTypes;

export const setInput = (value) => ({
  type: setInputValue,
  payload: value,
});
