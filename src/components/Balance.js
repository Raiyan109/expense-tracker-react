import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const Balance = () => {

    const { transactions } = useContext(ExpenseContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((prevState, currState) => (prevState += currState), 0).toFixed(2)
    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>Balance : ${total}</h1>
        </div>
    );
};

export default Balance;