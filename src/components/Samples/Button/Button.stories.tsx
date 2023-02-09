import { expect, jest } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  title: "Components/Samples/Button",
  component: Button,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: { onClick: jest.fn() },
  play: async ({ canvasElement, args: { onClick } }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByRole("button", { name: "Button" }));
    expect(onClick).toBeCalled();
  },
};
