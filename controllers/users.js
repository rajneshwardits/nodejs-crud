import * as userServices from '../services/users.js'
import { message, statusCode } from "../uitilities/constants.js"
import { successAction, failAction } from "../uitilities/response.js"

async function userList(req, res) {
    try {
        const data = await userServices.userList(req.body)
        res.status(statusCode.success).json(successAction(statusCode.success, data, message.fetch('User')))
    }
    catch (err) {
        res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong))
    }
}

async function userAdd(req, res) {
    try {
        const data = await userServices.userAdd(req.body)
        res.status(statusCode.success).json(successAction(statusCode.success, data, message.add('User')))
    }
    catch (err) {
        res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong))
    }
}

async function userUpdate(req, res) {
    try {
        const data = await userServices.userUpdate(req.params, req.body)
        res.status(statusCode.success).json(successAction(statusCode.success, data, message.update('User')))
    }
    catch (err) {
        res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong))
    }
}

async function userDelete(req, res) {
    try {
        const data = await userServices.userDelete(req.params)
        res.status(statusCode.success).json(successAction(statusCode.success, data, message.delete('User')))
    }
    catch (err) {
        res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong))
    }
}

async function login(req, res) {
    try {
        const data = await userServices.login(req.body)
        if (Object.keys(data).length === 0) {
            res.status(statusCode.wrongPassword).json(successAction(statusCode.wrongPassword, data, message.invalidlogin))
        } else {
            res.status(statusCode.success).json(successAction(statusCode.success, data, message.login))
        }
    }
    catch (err) {
        res.status(statusCode.badRequest).json(failAction(statusCode.badRequest, err.message, message.somethingWrong))
    }
}

export {
    userList, userAdd, userUpdate, userDelete, login
}