import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { login } from "../../redux/authReducer/actions";

import { View } from "./Auth.view";

const Auth: React.FunctionComponent = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [isLogin]);

  const submitHandler = (event: any) => {
    event.preventDefault();
    if(isLogin){
      if(email.trim().length === 0 || password.trim().length === 0)
      {
        console.log("error");
        return;
      } 
      dispatch(login);
      history.push("/");
    }else{
      return;
    }
  };
  return (
    <View
      isLogin={isLogin}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      onChangeAuth={() => setIsLogin(!isLogin)}
      onChangeEmail={(event) => setEmail(event.target.value)}
      onChangePassword={(event) => setPassword(event.target.value)}
      onChangeConfirmPassowrd={(event) =>
        setConfirmPassword(event.target.value)
      }
      submitHandler={(event: any) => submitHandler(event)}
    />
  );
};


export { Auth };
