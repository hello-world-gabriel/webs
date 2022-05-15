"use strict";
const logger = require("../../config/logger");
const User = require("../../models/user");

const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로이동"`);
        res.render("home/index");
    },
    
    login: (req, res) => {
        logger.info(`GET /login 304 "로그인 화면으로이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로이동"`);
        res.render("home/register");
    },
    forgetpassword: (req, res) => {
        res.render("home/ForgetPassword");
    },
    confirmEmail: (re1, res) => {
        res.render("home/confirmEmail");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err)
            logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`);
        else 
        logger.info(`POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err)
            logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`);
        else 
        logger.info(`POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        return res.json(response);
    },
    confirmEmail: async (req, res) => {
        const number = 1;
    },
};

module.exports = {
    output,
    process,
}