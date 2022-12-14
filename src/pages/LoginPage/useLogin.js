import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../../store/reducer/loginSlice/loginSlice";
import { resetDataLogin } from "../../store/reducer/loginSlice/loginSlice";
export const useLogin = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("token");
  const [mail, setMail] = React.useState(null);
  const [passw, setPassw] = React.useState(null);
  const [note, setNote] = React.useState(null);
  const [name, setName] = React.useState(username);
  const { email, password } = useSelector((state) => state.login);

  const loginSystem = () => {
    console.log(email, password);
    console.log(mail, passw);
    if (mail === email && passw === password) {
      localStorage.setItem("token", "hacktiv8naisss");
      console.log("iya");
      navigate("/");
    } else {
      setNote("Invalid Credential");
      console.log("kagak");
    }
  };
  const logoutSystem = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const changeUser = () => {
    dispatch(changeUserName(name));
  };

  //   useEffect(() => {
  //     dispatch(resetDataLogin());
  //   }, []);
  return {
    mail,
    setMail,
    passw,
    setPassw,
    note,
    setNote,
    isUserLoggedIn,
    loginSystem,
    name,
    setName,
    changeUser,
    logoutSystem,
  };
};
