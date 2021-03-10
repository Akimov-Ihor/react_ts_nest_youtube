import { LOGIN_SUCCESS } from '../../actions/user/user.actions';

const initialState = {
  userData: {},
  isLogginIn: false,
};

export const userReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log(action.payload);
      const { data } = action.payload;
      return {
        ...state,
        isLoggingIn: true,
        userData: data,
      };
    }
    default:
      return state;
  }
};
