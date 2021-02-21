export type TArtist = {
  basicInformation: TBasicInformation;
  advancedInformation: TAdvancedInformation;
  socialMedia: TSocialMedia;
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

export type TSocialMedia = {
  facebook?: string;
  instagram?: string;
  beatport?: string;
  residentAdvisor?: string;
  soundCloud?: string;
};
