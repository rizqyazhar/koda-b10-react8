import { useId, useReducer } from "react";
import { AuthContextReducer } from "./contextReducer";

export default function AuthContextReducerProvider({ children }) {
  const userId = useId();

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      const { type, payload } = action;

      switch (type) {
        case "register":
          return {
            ...prevState,
            users: [
              ...prevState.users,
              {
                id: userId,
                email: payload.email,
                username: payload.username,
                password: payload.password,
              },
            ],
          };

        case "login":
          return {
            ...prevState,
            loggedIn: payload,
          };

        default:
          prevState;
      }
    },
    { users: [], loggedIn: false },
  );
  return (
    <AuthContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </AuthContextReducer.Provider>
  );
}
