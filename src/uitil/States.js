export const arrState = ["Virginia", "Maryland", "Washington DC"];

export const stateToIdx = (state) => {
  return arrState.findIndex((st) => st.toLowerCase() === st.toLowerCase());
};

export const idxToState = (idx) => {
  return arrState.filter((_, index) => index === Number(idx))[0];
};
