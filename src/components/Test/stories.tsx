import { Story, Meta } from "@storybook/react";
import Test from ".";

export default {
  title: "Test",
  component: Test,
} as Meta;

export const Default: Story = () => <Test />;
