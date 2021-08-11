import React from "react";

import Button from "./Button";

export default {
  title: "Example/Button2",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
