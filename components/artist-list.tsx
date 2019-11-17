import Grid from "@material-ui/core/Grid";

import ArtistItem from "./artist-item";

const ArtistList = () => {
	return (
		<Grid container spacing={5} direction="row">
			<Grid item xs={12} sm={5} md={2} lg={1}>
				<ArtistItem
					profileImageUrl="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
					name="test"
				/>
			</Grid>
			<Grid item xs={12} sm={5} md={2} lg={1}>
				<ArtistItem
					profileImageUrl="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
					name="test"
				/>
			</Grid>
		</Grid>
	);
};

export default ArtistList;
