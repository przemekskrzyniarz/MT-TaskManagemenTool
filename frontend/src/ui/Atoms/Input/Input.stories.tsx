import { Input } from ".";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <Input className={"btn"}>{text("Example text", "Hello")}</Input>;
export default {
  component: Input,
  title: "Atoms/Button",
};
