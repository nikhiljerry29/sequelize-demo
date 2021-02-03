const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../config/auth')
const _ = require('lodash');

router.get('/', (req, res) => {
	if(req.isAuthenticated())
		res.redirect("/dashboard")
	else
		res.redirect("/home")
})

router.get('/home', (req, res) => {
	res.render("home")
})


router.get('/dashboard', ensureAuthenticated ,(req, res) => {
	console.log(req)
	res.render("dashboard", {
		fullName: _.capitalize(req.user.first_name) + " " + _.capitalize(req.user.last_name)
	})
})

module.exports = router