import React, { ReactNode } from "react";

type FooterItemPropsType = {
  link?: string;
  children: ReactNode;
};

export const FooterItem = ({
  link,
  children,
  ...otherProps
}: FooterItemPropsType) => {
  return (
    <a href={link} {...otherProps}>
      {children}
    </a>
  );
};
