import { Form } from ".";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <Form className={"btn"}>{text("Example text", "Hello")}</Form>;

export default {
  component: Form,
  title: "Atoms/Button",
};
