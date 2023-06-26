import axios from "axios";

const API_URL = "http://localhost:5000"

export const addNewTodo = async (data) => {
    try {
        console.log(data);
        const res = await axios.post(`${API_URL}/todos`, { data })
    } catch (error) {
        console.log("(Clientside) Error while adding new todo: ", error.message);
    }
}

export const getAllTodos = async (data) => {
    try {
        const res = await axios.get(`${API_URL}/todos`)

        return res
    } catch (error) {
        console.log("error while adding new todo: ", error.message);
    }
}

export const toggleTodoStatus = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`)

        return res
    } catch (error) {
        console.log("error while adding new todo: ", error.message);
    }
}

export const deleteTodoById = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`)

        return res
    } catch (error) {
        console.log("error while adding new todo: ", error.message);
    }
}