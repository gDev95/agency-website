import { Twitter } from "@material-ui/icons";
import React from "react";
import { Beatport } from "./Beatport";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { ResidentAdvisor } from "./ResidentAdvisor";
import { Soundcloud } from "./Soundcloud";
import { SocialMediaIconsType } from "./types";

const socialMediaIcons: SocialMediaIconsType[] = [
  { id: "facebook", icon: <Facebook /> },
  { id: "instagram", icon: <Instagram /> },
  { id: "twitter", icon: <Twitter /> },
  { id: "soundCloud", icon: <Soundcloud /> },
  { id: "residentAdvisor", icon: <ResidentAdvisor /> },
  { id: "beatport", icon: <Beatport /> },
];

export function getSocialMediaIcon(id: string) {
  const socialMedia = socialMediaIcons.find(
    socialMediaIcon => socialMediaIcon.id === id,
  );
  if (!socialMedia) {
    throw new Error(`Expected social media ${id} to exist but it didn't`);
  }
  return socialMedia.icon;
}
export * from "./types";
