import styled from 'styled-components';

export const StatisticInfo = styled.section`
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.text};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const StatisticsTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.text};
    padding-top: ${p => p.theme.space[4]}px;
`;

export const StatisticsList = styled.ul`
    display: flex;
    align-items: center;
    font-size: ${p => p.theme.fontSizes.s};
`;

export const StatisticsItems = styled.li`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    padding: ${p => p.theme.space[4]}px;
    background-color: ${getRandomHexColor};
`;

export const StatisticsLabel = styled.span`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.text};
`;

export const StatisticsPercentage = styled.span`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.text};
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}