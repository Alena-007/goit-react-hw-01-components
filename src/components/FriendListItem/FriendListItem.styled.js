import styled from 'styled-components';

export const FriendsListItem = styled.li`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

    & p {
        font-size: ${p => p.theme.fontSizes.l};
        font-weight: ${p => p.theme.fontWeights.bold};
        color: ${p => p.theme.colors.text};
        margin-left: ${p => p.theme.space[4]}px;
    }
`;

export const FriendsStatus = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    margin-right: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${({ status, theme }) => {
        return status ? theme.colors.green : theme.colors.red;
    }};
`;
