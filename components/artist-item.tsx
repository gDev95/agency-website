import styled from "styled-components";

const StyledArtistListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: space-around;
	justify-content: center;
	list-style-type: none;
`;

const StyledProfileImage = styled.img`
	height: 120px;
	width: 120px;
	border-radius: 50%;
`;

const StyledArtistName = styled.span`
	margin-top: 5px;
	font-size: 20px;
`;

interface PropTypes {
	profileImageUrl: string;
	name: string;
}

const ArtistItem = (props: PropTypes) => {
	const { profileImageUrl, name } = props;
	return (
		<StyledArtistListItem>
			<StyledProfileImage src={profileImageUrl} />
			<StyledArtistName>{name}</StyledArtistName>
		</StyledArtistListItem>
	);
};

export default ArtistItem;
