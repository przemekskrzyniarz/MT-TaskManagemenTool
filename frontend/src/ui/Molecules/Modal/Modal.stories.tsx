import { Modal } from ".";

import * as React from "react";

import { text } from "@storybook/addon-knobs";



export const Normal = () => <Modal className={"btn"}>{text("Example text", "Hello")}</Modal>;

export default {
  component: Modal,
  title: "Atoms/Button",
};
