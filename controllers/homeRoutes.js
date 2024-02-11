const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth.js');

//get all blogs
router.get('/', async (req, res) => {});

//get blog by id
router.get('/blog/:id', async (req, res) => {});

//get withAuth mware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {});

//check if user is logged in
router.get('/login', (req, res) => {});

module.exports = router;
