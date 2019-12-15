import React from "react";
import { storiesOf } from "@storybook/react";
import * as Knobs from "@storybook/addon-knobs";
import { Header } from "./components/Header";
import { UserList } from "./components/UserList";

storiesOf("GraphQL Test", module)
  .addDecorator(Knobs.withKnobs)
  .addDecorator(story => <Header>{story()}</Header>)
  .add("to Storybook", () => {
    return <UserList />;
  });
