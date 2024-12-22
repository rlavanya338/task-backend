const { createTask } = require('./createTask')
const { getAllTasks } = require('./getTasks')
const { getOneTasks } = require('./getTaskbyid')
const { updateTask } = require('./updateTask')
const { taskAction } = require('./completeTask')
const { deleteTask } = require('./deleteTask')
const { login } = require('./login')
const { register } = require('./register')

module.exports = {
    createTask,
    getAllTasks,
    getOneTasks,
    updateTask,
    taskAction,
    deleteTask,
    login,
    register
}