import { createContext, useReducer } from "react";
// import { Children } from "react/cjs/react.production.min";

const AuthContext = createContext();

const initialState = {
  isLogin: false,
  status: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        status: "Loggedin",
      };
    case "LOGIN_ERROR":
      return {
        isLogin: false,
        status: "",
      };
    default:
      throw new Error();
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
