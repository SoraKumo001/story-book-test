import { expect, jest } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Login } from "./Login";
import { waitFor } from "@testing-library/dom";

const meta: ComponentMeta<typeof Login> = {
  title: "Components/Samples/Login",
  component: Login,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof Login> = {};

export const Error: ComponentStoryObj<typeof Login> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      userEvent.click(canvas.getByRole("button", { name: "ログイン" }));
    });
    await waitFor(() => {
      expect(
        canvas.getByText("ユーザ名を入力してください")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        canvas.getByText("パスワードを入力してください")
      ).toBeInTheDocument();
    });
  },
};
export const Fail: ComponentStoryObj<typeof Login> = {
  parameters: {
    nextRouter: {
      push: jest.fn(),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await userEvent.type(canvas.getByLabelText("ユーザ名"), "fail", {
        delay: 10,
      });
    });
    await waitFor(async () => {
      await userEvent.type(canvas.getByLabelText("パスワード"), "password", {
        delay: 10,
      });
    });
    await waitFor(() => {
      userEvent.click(canvas.getByRole("button", { name: "ログイン" }));
    });
    await waitFor(() => {
      expect(canvas.getByText("認証に失敗しました")).toBeInTheDocument();
    });
  },
};
export const Pass: ComponentStoryObj<typeof Login> = {
  parameters: {
    nextRouter: {
      push: jest.fn(),
    },
  },
  play: async ({
    canvasElement,
    parameters: {
      nextRouter: { push },
    },
  }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await userEvent.type(canvas.getByLabelText("ユーザ名"), "user", {
        delay: 10,
      });
    });
    await waitFor(async () => {
      await userEvent.type(canvas.getByLabelText("パスワード"), "password", {
        delay: 10,
      });
    });
    await waitFor(() => {
      userEvent.click(canvas.getByRole("button", { name: "ログイン" }));
    });
    await waitFor(() => {
      expect(push).lastCalledWith("/main");
    });
  },
};
