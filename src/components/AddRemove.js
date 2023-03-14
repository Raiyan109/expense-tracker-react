import React from 'react';

const AddRemove = () => {

    return (
        <div>
            <form>
                <input type="number" placeholder='Enter your expense data' />
                <br />
                <button>Add</button>
                <button>Remove</button>
            </form>
        </div>
    );
};

export default AddRemove;