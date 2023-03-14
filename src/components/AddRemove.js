import React, { useState } from 'react';

const AddRemove = () => {

    const [expense, setExpense] = useState('')

    const onSubmit = e => {
        e.preventDefault()
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