import { AuthForm } from ".";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <AuthForm className={"btn"}>{text("Example text", "Hello")}</AuthForm>;

export default {
  component: AuthForm,
  title: "Atoms/Button",
};
