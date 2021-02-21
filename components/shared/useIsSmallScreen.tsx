import { useMediaQuery } from "react-responsive";

export const useIsSmallScreen = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  return isMobileScreen;
};
