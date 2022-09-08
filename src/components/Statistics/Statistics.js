import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {stats.map(item => (
                    <li className="item" key={item.id}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
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