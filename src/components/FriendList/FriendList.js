import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <Box width="320px" ml="auto" mr="auto" mb={5}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
            ))}
        </Box>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
