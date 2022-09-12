import PropTypes from 'prop-types';
import { TransactionData } from 'components/TransactionData/TransactionData';
import { Box } from 'components/Box';
import { TransactionTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Box width="600px" ml="auto" mr="auto" p={4}>
            <TransactionTable>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                        <TransactionData key={id} type={type} amount={amount} currency={currency} />
                    ))}
                </tbody>
            </TransactionTable>
        </Box>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
