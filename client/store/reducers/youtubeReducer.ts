export const plannerReducer = () => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      const { userData } = action.payload;
      return {
        ...state,
        isLoggingIn: false,
        userData,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
      };
    }
    case types.REGISTRATION_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case types.REGISTRATION_SUCCESS: {
      const { userData } = action.payload;
      return {
        ...state,
        isLoggingIn: false,
        userData,
      };
    }
    case types.REGISTRATION_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
      };
    }

    case types.VERIFY_AUTH_REQUEST: {
      return {
        ...state,
        isVerifyingAuth: true,
      };
    }
    case types.VERIFY_AUTH_SUCCESS: {
      return {
        ...state,
        isVerifyingAuth: false,
      };
    }
    case types.VERIFY_AUTH_FAILURE: {
      return {
        ...state,
        isVerifyingAuth: false,
      };
    }
    case types.SET_USER:
    {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case types.SET_PLANN:
    {
      return {
        ...state,
        plansList: [...state.plansList, action.payload],
      };
    }
    case types.SET_ALL_PLANS:
    {
      return {
        ...state,
        plansList: [...action.payload],
      };
    }
    case types.FILTER_PLAN:
    {
      return {
        ...state,
        plansList: [...action.payload],
      };
    }
    case types.LOGOUT:
    {
      return initialState;
    }
    default:
      return state;
  }
};
