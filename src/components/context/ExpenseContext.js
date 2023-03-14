import { createContext, useReducer } from "react";

const initialValue = {
    balance: 550,
    transactions: [

    ]
}

const AddReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}


export const ExpenseContext = createContext(initialValue)


export const ExpenseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddReducer, initialValue)

    // Actions
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return <ExpenseContext.Provider value={{
        balance: state.balance,
        transactions: state.transactions,
        addTransaction,
        dispatch
    }}>
        {children}
    </ExpenseContext.Provider>
}