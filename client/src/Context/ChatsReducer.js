import { useContext } from "react";
import { AuthContext } from "./AuthContext";


const ChatsReducer = (state, action) => {
    const { currentUser } = useContext(AuthContext);
    switch (action.type) {
        case "CHANGE_USER": {
            return {
                user: action.payload,
                chatId: currentUser.uid > action.payload.uid ? action.payload.uid + currentUser.uid : currentUser.uid + action.payload.uid,
            };
        }
        default:
            return state;
    }
}

export default ChatsReducer