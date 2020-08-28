import styled, { css } from "styled-components";
import Link from "next/link";

const StyledArtistListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	list-style-type: none;
`;

type IProfileImage {
	profileImage: string;
}
const StyledProfileImage = styled("div")<IProfileImage>`
	background-repeat: no-repeat
	background-size: cover;
	background-position: center;
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 1px solid #333;
	background-image: url("${props => props.profileImage}");
	cursor: pointer;
`;

const StyledArtistName = styled.span`
	margin-top: 5px;
	font-size: 20px;
	cursor: pointer;
`;

type PropTypes {
	id: string;
	profileImageUrl: string;
	name: string;
}

const ArtistItem = (props: PropTypes) => {
	const { profileImageUrl, name, id } = props;
	console.log(profileImageUrl);
	return (
		<StyledArtistListItem>
			<Link href={"/" + id}>
				<StyledProfileImage profileImage={profileImageUrl} />
			</Link>

			<Link href={"/" + id}>
				<StyledArtistName>{name}</StyledArtistName>
			</Link>
		</StyledArtistListItem>
	);
};

export default ArtistItem;
