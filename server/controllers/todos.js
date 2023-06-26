import express from "express";
import ToDoTask from "../models/todoModel.js";

export const getAllTodos = async (req, res) => {
    try {
        const allTodos = await ToDoTask.find({}).sort({ 'createdAt': -1 })
        return await res.status(200).json(allTodos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteTodoById = async (req, res) => {
    try {
        const deleteTodo = await ToDoTask.findByIdAndDelete(req.params.id)
        return await res.status(200).json(deleteTodo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const toggleTodoStatus = async (req, res) => {
    try {
        const toggledTodo = await ToDoTask.findById(req.params.id)

        const todo = await ToDoTask.findOneAndUpdate(
            { _id: req.params.id },
            { completed: !toggledTodo.completed }
        )

        await todo.save()
        return await res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addNewTodo = async (req, res) => {
    try {
        const newTodo = await ToDoTask.create({
            todo: req.body.data,
            completed: false,
            createdAt: Date.now()
        })
        console.log(req.body.todo);
        await newTodo.save();

        return res.status(200).json(newTodo)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}