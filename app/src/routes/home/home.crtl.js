"use strict";

const User = require("../../models/user");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
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
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
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