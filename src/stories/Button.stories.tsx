import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "../components/Button";
import "./default.scss";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["", "outline", "text"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: "local_grocery_store",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: "local_grocery_store",
};
