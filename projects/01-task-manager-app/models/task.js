const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "inprogress", "completed"]
    },
    dueDate: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setDate(date.getDate() + 2);
            return date;
        }
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };
