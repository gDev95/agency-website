import React, { ReactNode } from "react";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Soundcloud } from "./icons/Soundcloud";

export type SocialMediaType = {
  icon: ReactNode;
  name: string;
  link: string;
};

export type FooterItemType = SocialMediaType;

export const footerItems: FooterItemType[] = [
  {
    name: "facebook",
    link: "https://www.facebook.com/nobobookings",
    icon: <Facebook />
  },
  {
    name: "instagram",
    link: "https://instagram.com/nobobookings?igshid=fearkhwbaavx",
    icon: <Instagram />
  },
  {
    name: "soundcloud",
    link: "https://soundcloud.app.goo.gl/EEnyuPRvSrsZ9EcV9",
    icon: <Soundcloud />
  }
];
