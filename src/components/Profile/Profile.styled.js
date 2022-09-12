import styled from 'styled-components';

export const ProfileInfo = styled.div`
    // background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes.l};
    margin-bottom: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.space[4]}px;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.space[4]}px;

    & img {
        width: 200px;
        margin-bottom: ${p => p.theme.space[4]}px;
        border: ${p => p.theme.borders.normal};
        border-radius: ${p => p.theme.radii.round};
        box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    }

    & p {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`;

export const ProfileUsername = styled.p`
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.primary};
`;

export const ProfileList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
    padding: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.space[4]}px;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const ProfileItems = styled.li`
    width: 110px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
`;

export const ProfileLabel = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.secondary};
`;

export const ProfileQuantity = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.secondary};
`;
