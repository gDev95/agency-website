import { useRouter } from "next/router";
import React from "react";

const ArtistsPage = () => {
  const router = useRouter();
  const artistId = router.query.id;
  if (!artistId) {
    // go to artist overview page
    return <p>400 not found</p>;
  }
  // show specific artist page
  return <p>{artistId}</p>;
};

export default ArtistsPage;
