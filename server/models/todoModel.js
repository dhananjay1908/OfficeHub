import mongoose, { mongo } from "mongoose";

const toDoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

const ToDoTask = mongoose.model("ToDoTask", toDoSchema);

export default ToDoTask;