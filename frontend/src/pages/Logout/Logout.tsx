import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/authReducer/actions";

export const Logout: FunctionComponent<{}> = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(logout);
    // eslint-disable-next-line
  }, [logout]);

  return <Redirect to="/" />;
};
