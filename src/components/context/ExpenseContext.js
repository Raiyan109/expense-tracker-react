import { createContext, useReducer } from "react";

const initialValue = {
    transactions: []
}

const AddReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'SUBTRACT_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                balance: state.balance - action.payload.expense
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

    const subtractTransaction = (transaction) => {
        dispatch({
            type: 'SUBTRACT_TRANSACTION',
            payload: transaction
        })
    }

    return <ExpenseContext.Provider value={{
        balance: state.balance,
        transactions: state.transactions,
        addTransaction,
        subtractTransaction,
        dispatch
    }}>
        {children}
    </ExpenseContext.Provider>
}