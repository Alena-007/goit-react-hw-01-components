import { TransactionData } from 'components/TransactionData/TransactionData';

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
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
        </table>
    );
};
