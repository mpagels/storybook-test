import React from "react";

import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  title: "This is an awesome",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias. Dicta officia suscipit odio ipsum ut fuga tempora neque eveniet. Modi consectetur dolore eos molestiae, obcaecati ipsa maxime. Saepe temporibus, corrupti aliquid sed minima ipsum corporis reiciendis iusto aperiam quidem.",
};
export const SimpleCardWithButton = Template.bind({});
SimpleCardWithButton.args = {
  title: "This is an awesome",
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, molestias. Dicta officia suscipit odio ipsum ut fuga tempora neque eveniet. Modi consectetur dolore eos molestiae, obcaecati ipsa maxime. Saepe temporibus, corrupti aliquid sed minima ipsum corporis reiciendis iusto aperiam quidem.",
  hasButton: true,
};

SimpleCardWithButton.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
