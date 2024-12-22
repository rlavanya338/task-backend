const express = require('express')
const router = express.Router()

const trimRequest = require('trim-request')

const {
    createTask,
    getAllTasks,
    getOneTasks,
    updateTask,
    taskAction,
    deleteTask,
    login,
    register
} = require('../app/controllers/users')

const {
    verifyToken
} = require('../app/controllers/users/helpers')

router.post(
    '/register',
    trimRequest.all,
    register
)

router.post(
    '/login',
    trimRequest.all,
    login
)

router.post(
    '/tasks',
    verifyToken,
    trimRequest.all,
    createTask
)

router.get(
    '/tasks',
    verifyToken,
    trimRequest.all,
    getAllTasks
)

router.get(
    '/tasks/:id',
    verifyToken,
    trimRequest.all,
    getOneTasks
)

router.post(
    '/tasks/:id',
    verifyToken,
    trimRequest.all,
    updateTask
)

router.post(
    '/tasks/:id/toggle',
    verifyToken,
    trimRequest.all,
    taskAction
)

router.delete(
    '/tasks/:id',
    verifyToken,
    trimRequest.all,
    deleteTask
)


module.exports = router