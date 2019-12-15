import React from "react";
import { storiesOf } from "@storybook/react";
import { Test01 } from "./components/test01";
import { action } from "@storybook/addon-actions";
import * as Knobs from "@storybook/addon-knobs";

storiesOf("Welcome", module)
  .addDecorator(Knobs.withKnobs)
  .add("to Storybook", () => {
    const label = Knobs.text("ラベル", "あいうえお");
    console.log("start");
    return (
      <div>
        テスト
        <Test01 label={label} onClick={action("onClick")} />
      </div>
    );
  })
  .add("to Storybook2", () => {
    const label: string = Knobs.text("ラベル", "ふぉっふぉっふぉ");
    console.log("start");
    return (
      <div>
        テスト
        <Test01 label={label} onClick={action("onClick")} />
      </div>
    );
  });

  storiesOf("Story2", module)
  .addDecorator(Knobs.withKnobs)
  .add("to Storybook", () => {
    const label = Knobs.text("ラベル", "あいうえお");
    console.log("start");
    return (
      <div>
        テスト
        <Test01 label={label} onClick={action("onClick")} />
      </div>
    );
  })
  .add("to Storybook2", () => {
    const label: string = Knobs.text("ラベル", "ふぉっふぉっふぉ");
    console.log("start");
    return (
      <div>
        テスト
        <Test01 label={label} onClick={action("onClick")} />
      </div>
    );
  });