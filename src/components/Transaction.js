import React from 'react';

const Transaction = ({ id, type, amount }) => {
    return (
        <div>
            <li> -{amount} -{type}</li>
        </div>
    );
};

export default Transaction;