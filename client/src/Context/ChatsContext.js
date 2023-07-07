import { createContext, useEffect, useReducer } from "react"
import ChatsReducer from "./ChatsReducer";

const INITIAL_STATE = {
    chatId: "null",
    user: {},
}

export const ChatsContext = createContext(INITIAL_STATE);

export const ChatsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ChatsReducer, INITIAL_STATE);

    return (
        <ChatsContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatsContext.Provider>
    )
} 