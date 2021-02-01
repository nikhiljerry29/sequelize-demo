const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

router.get('/', (req, res) => {
	
	Gig.findAll()
	.then(foundGigs => {
		res.render('gigs', {
			gigs: foundGigs
		})
	})
	.catch(err => console.log(err))
})

router.get('/add', (req, res) => {
	res.render("add")
})

router.post('/add', (req, res) => {
	const newGig = req.body;
	res.send('done');
	Gig.create({
		title: newGig['title'],
		technologies: newGig['technologies'],
		budget: newGig['budget'],
		gigs_description: newGig['gigs_description'],
		contact_email: newGig['contact_email']
	})
	.then(gig => res.redirect("/gigs"))
	.catch(err => console.log(err))
})

module.exports = router