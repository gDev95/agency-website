import React from "react";

type DropdownItems = {
  name: string;
  onClick: () => void;
};

type PropsType = {
  items: DropdownItems;
};

export const Dropdown = ({ items }: PropsType) => {};
