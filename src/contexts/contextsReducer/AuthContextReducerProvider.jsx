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
            loggedIn: { status: payload.status, user: payload.user },
          };

        case "logout":
          return {
            ...prevState,
            loggedIn: { status: false, user: null },
          };

        case "update":
          return {
            ...prevState,
            users: prevState.users.map((user) =>
              user.id === payload.id ? { ...user, payload } : user,
            ),
          };

        default:
          prevState;
      }
    },
    {
      users: [],
      loggedIn: {
        status: false,
        user: null,
      },
    },
  );
  return (
    <AuthContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </AuthContextReducer.Provider>
  );
}
