import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';
import Transaction from './Transaction';

const DisplayTrans = () => {


    const { transactions } = useContext(ExpenseContext)

    return (
        <div>
            <h1>Transactions:</h1>
            <ul style={{ marginTop: '20px' }}>

                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} type={transaction.type} amount={transaction.amount}></Transaction>
                ))}
            </ul>
        </div>
    );
};

export default DisplayTrans;