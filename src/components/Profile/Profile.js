import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
    ProfileInfo,
    ProfileUsername,
    ProfileList,
    ProfileItems,
    ProfileLabel,
    ProfileQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Box width="320px" ml="auto" mr="auto" mb={5} p={4}>
            <ProfileInfo>
                <img src={avatar} alt={username} />
                <ProfileUsername>{username}</ProfileUsername>
                <p>@{tag}</p>
                <p>{location}</p>
            </ProfileInfo>

            <ProfileList>
                <ProfileItems>
                    <ProfileLabel>Followers</ProfileLabel>
                    <ProfileQuantity>{stats.followers}</ProfileQuantity>
                </ProfileItems>
                <ProfileItems>
                    <ProfileLabel>Views</ProfileLabel>
                    <ProfileQuantity>{stats.views}</ProfileQuantity>
                </ProfileItems>
                <ProfileItems>
                    <ProfileLabel>Likes</ProfileLabel>
                    <ProfileQuantity>{stats.likes}</ProfileQuantity>
                </ProfileItems>
            </ProfileList>
        </Box>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
