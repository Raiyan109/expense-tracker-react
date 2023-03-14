import React from 'react';

const Transaction = ({ transaction }) => {
    return (
        <div>
            <li> -{transaction.expense} </li>
        </div>
    );
};

export default Transaction;