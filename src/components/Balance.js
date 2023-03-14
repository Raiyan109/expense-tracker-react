import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const Balance = () => {

    const { balance } = useContext(ExpenseContext)
    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: '20px' }}>Balance : ${balance}</h1>
        </div>
    );
};

export default Balance;