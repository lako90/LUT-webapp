const initialState = {
  loading: true,
  error: false,
};

const appReducer = (state = initialState, { type, error }) => {
  if (type.includes('/REQUEST')) {
    return {
      loading: true,
      error: false,
    };
  }

  if (type.includes('/ERROR')) {
    return {
      loading: false,
      error,
    };
  }

  if (type.includes('/SUCCESS')) {
    return {
      loading: false,
      error: false,
    };
  }

  return state;
};

export default appReducer;
