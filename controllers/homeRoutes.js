const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth.js');

//get all blogs
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      inlcude: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    //make data readable by template
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    //pass serialized blog data
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

//get blog by id
router.get('/blog/:id', async (req, res) => {});

//get withAuth mware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {});

//check if user is logged in
router.get('/login', (req, res) => {});

module.exports = router;
