import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
    StatisticInfo,
    StatisticsTitle,
    StatisticsList,
    StatisticsItems,
    StatisticsLabel,
    StatisticsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Box width="600px" ml="auto" mr="auto" mb={5} p={4}>
            <StatisticInfo>
                <StatisticsTitle>Upload stats</StatisticsTitle>

                <StatisticsList>
                    {stats.map(item => (
                        <StatisticsItems key={item.id}>
                            <StatisticsLabel>{item.label}</StatisticsLabel>
                            <StatisticsPercentage>{item.percentage}%</StatisticsPercentage>
                        </StatisticsItems>
                    ))}
                </StatisticsList>
            </StatisticInfo>
        </Box>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
