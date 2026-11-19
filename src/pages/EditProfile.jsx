import { useNavigate } from "react-router";
import { AuthContextReducer } from "../contexts/contextsReducer/contextReducer";
import { useContext, useEffect } from "react";

export default function EditProfile() {
  const { state } = useContext(AuthContextReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.loggedIn) navigate("/login");
  }, [state.loggedIn, navigate]);

  return <h1>{state.loggedIn}</h1>;
}
