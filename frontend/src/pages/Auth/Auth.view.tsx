import * as React from "react";

import { Helmet } from "react-helmet";

import { Form, Input, Label, Button } from "../../ui/Atoms";
import { ViewProps } from "./Auth.typings";

const View: React.FunctionComponent<ViewProps> = ({
  onChangeAuth,
  isLogin,
}) => {
  return (
    <React.Fragment>
      <Helmet title="Auth" />
      <div className="Auth">
        <div className={["Auth__content", isLogin ? "Auth__content--active" : "Auth__content--inactive"].join(" ")} >
          <div className="Auth__button-box">
            <Button
              onClick={onChangeAuth}
              className={[
                "Button--auth",
                isLogin ? "" : "Button--inactive",
              ].join(" ")}
            >
              Sign in
            </Button>
            <Button
              onClick={onChangeAuth}
              className={[
                "Button--auth",
                isLogin ? "Button--inactive" : "",
              ].join(" ")}
            >
              Sign up
            </Button>
          </div>
          <div className="Auth__form-box">
            <Form>
              <Input type="text" text="Email"></Input>
              <Label text="Email"></Label>
              <Input type="password" text="Password"></Input>
              <Label text="Password"></Label>
                <React.Fragment>
                  <Input
                    className={[isLogin ? "Input--inactive" : ""].join(" ")}
                    type="password"
                    text="Confirm Password"
                  ></Input>
                  <Label
                    className={[isLogin ? "Label--inactive" : ""].join(" ")}
                    text="Confirm Password"
                  ></Label>
                </React.Fragment>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { View };
