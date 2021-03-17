import * as React from "react";

import { Helmet } from "react-helmet";

import { Form, Input, Label, Button } from "../../ui/Atoms";
import { ViewProps } from "./Auth.typings";

const View: React.FunctionComponent<ViewProps> = ({
  onChangeAuth,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassowrd,
  submitHandler,
  email,
  password,
  confirmPassword,
  isLogin,
}) => {
  return (
    <React.Fragment>
      <Helmet title="Auth" />
      <div className="Auth">
        <div
          className={[
            "Auth__content",
            isLogin ? "Auth__content--active" : "Auth__content--inactive",
          ].join(" ")}
        >
          <div className="Auth__button-box">
            <Button
              onClick={onChangeAuth}
              className={[
                "Button--auth",
                isLogin ? "" : "Button--auth--inactive",
              ].join(" ")}
            >
              Sign in
            </Button>
            <Button
              onClick={onChangeAuth}
              className={[
                "Button--auth",
                isLogin ? "Button--auth--inactive" : "",
              ].join(" ")}
            >
              Sign up
            </Button>
          </div>
          <div className="Auth__form-box">
            <Form onSubmit={submitHandler}>
              <Input type="text" text="Email" onChange={onChangeEmail} value={email}></Input>
              <Label text="Email"></Label>
              <Input
                type="password"
                text="Password"
                onChange={onChangePassword}
                value={password}
              ></Input>
              <Label text="Password"></Label>
              {!isLogin ? <React.Fragment>
                <Input
                  type="password"
                  text="Confirm Password"
                  onChange={onChangeConfirmPassowrd}
                  value={confirmPassword}
                ></Input>
                <Label
                  text="Confirm Password"
                ></Label>
              </React.Fragment> : null}
              <Button>
                <span className="Button__visible">Submit</span>
                <span className="Button__invisible">
                  {isLogin ? "Login" : "Register"}
                </span>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { View };
