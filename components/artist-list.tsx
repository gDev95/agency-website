import Grid from "@material-ui/core/Grid";
import gql from "graphql-tag";
import ArtistItem from "./artist-item";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";

export const ALL_ARTISTS_QUERY = gql`
	query Artists {
		artists {
			id
			basicInformation {
				name
				profileImageUrl
			}
		}
	}
`;
const ArtistList = () => {
	const { loading, error, data } = useQuery(ALL_ARTISTS_QUERY);
	return (
		<Grid container spacing={5} direction="row">
			{data &&
				data.artists.map((artist: any) => {
					return (
						<Grid key={artist.id} item xs={12} sm={5} md={3} lg={2}>
							<ArtistItem
								id={artist.id}
								profileImageUrl={artist.basicInformation.profileImageUrl}
								name={artist.basicInformation.name}
							/>
						</Grid>
					);
				})}
		</Grid>
	);
};

export default ArtistList;
