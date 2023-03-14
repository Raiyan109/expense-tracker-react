import { createContext, useReducer } from "react";

const initialValue = {
    balance: 550,
    transactions: [
        { id: 1, amount: 200, type: 'Add' },
        { id: 2, amount: 400, type: 'Remove' },
    ]
}

const AddReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export const ExpenseContext = createContext(initialValue)


export const ExpenseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddReducer, initialValue)

    return <ExpenseContext.Provider value={{
        balance: state.balance,
        transactions: state.transactions,
        dispatch
    }}>
        {children}
    </ExpenseContext.Provider>
}