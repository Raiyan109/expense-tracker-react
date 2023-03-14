import React, { useContext, useState } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const AddRemove = () => {
    const [expense, setExpense] = useState('')

    const { addTransaction } = useContext(ExpenseContext)
    const { subtractTransaction } = useContext(ExpenseContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            expense: +expense,
            type: 'Add'

        }
        console.log(expense);
        addTransaction(newTransaction)
    }

    const onRemove = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            expense: +expense,
            type: 'Remove'
        }

        console.log(expense);
        subtractTransaction(newTransaction);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="number" placeholder='Enter your expense data'
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                />
                <br />
                <button onClick={onSubmit}>Add</button>
                <button onClick={onRemove}>Remove</button>
            </form>
        </div>
    );
};

export default AddRemove;