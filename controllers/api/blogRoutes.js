const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//post new blog
router.post('/', withAuth, async (req, res) => {});

//delete blog by id
router.delete('/:id', withAuth, async (req, res) => {});

module.exports = router;
