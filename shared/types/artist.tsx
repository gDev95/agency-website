export type TArtist = {
  id: string;
  basicInformation: TBasicInformation;
  advancedInformation: TAdvancedInformation;
  socialMediaLinks: TSocialMediaLinks;
};

export type TBasicInformation = {
  name: string;
  description: string;
  profileImageUrl: string;
  coverImageUrl: string;
  logoUrl: string;
  isDraft: boolean;
};

export type TAdvancedInformation = {
  label: TLabel[];
  setup: TSetup;
  hospitality: string[];
};

export type TLabel = {
  logoUrl: string;
  link: string;
};

export type TSetup = {
  equipment: string[];
  equipmentImageUrl: string;
};

export type TSocialMediaLinks = {
  facebook?: string;
  instagram?: string;
  beatport?: string;
  residentAdvisor?: string;
  soundCloud?: string;
};
