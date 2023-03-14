import moment from 'moment/moment';
import React from 'react';

const Transaction = ({ transaction }) => {
    // const moment = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div>
            <li>{moment().format('MMMM Do YYYY dddd')} - {transaction.expense} </li>
        </div>
    );
};

export default Transaction;