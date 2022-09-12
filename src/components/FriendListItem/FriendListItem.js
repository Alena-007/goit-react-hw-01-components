import PropTypes from 'prop-types';
import { FriendsListItem, FriendsStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListItem>
            <FriendsStatus status={isOnline}></FriendsStatus>
            <img className="avatar" src={avatar} alt="User avatar" width="48px" />
            <p className="name">{name}</p>
        </FriendsListItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
