import React, { useContext, useState } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const AddRemove = () => {
    const [expense, setExpense] = useState('')

    const { addTransaction } = useContext(ExpenseContext)


    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            expense: +expense

        }
        console.log(expense);
        addTransaction(newTransaction)
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
                <button>Remove</button>
            </form>
        </div>
    );
};

export default AddRemove;