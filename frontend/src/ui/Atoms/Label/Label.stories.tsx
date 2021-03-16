import { Label } from ".";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <Label className={"btn"}>{text("Example text", "Hello")}</Label>;

export default {
  component: Label,
  title: "Atoms/Button",
};
