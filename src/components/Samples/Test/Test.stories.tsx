import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Test } from './Test';

const meta: ComponentMeta<typeof Test> = {
  title: 'Components/Samples/Test',
  component: Test,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof Test> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText('Test')
    ).toBeInTheDocument();
  },
}
