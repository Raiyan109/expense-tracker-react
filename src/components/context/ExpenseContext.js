import { createContext, useReducer } from "react";

const initialValue = {
    transactions: [
        { id: 1, amount: 200, type: 'Add' },
        { id: 2, amount: 300, type: 'Remove' },
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
        transactions: state.transactions,
        dispatch
    }}>
        {children}
    </ExpenseContext.Provider>
}