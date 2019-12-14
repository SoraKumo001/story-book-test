import { configure } from "@storybook/react";
import { setConsoleOptions } from '@storybook/addon-console';
import "@storybook/addon-console";
import "../styles/common.scss";

setConsoleOptions({
  panelExclude: [],
  });
configure(require.context("../src", true, /\.stories\.tsx$/), module);
