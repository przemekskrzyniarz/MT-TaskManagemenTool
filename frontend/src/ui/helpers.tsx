/* eslint-disable react/display-name */
import React from "react";

export const isClient = typeof window !== "undefined";

export const canSmoothScroll =
  isClient && "scrollBehavior" in document.documentElement.style;
