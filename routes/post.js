const express = require('express');
const router =  express.Router();

const { getPosts, createPosts, getDetail, getUpdate, deletePost, searchPost} = require("../controllers/post.js");
const auth = require('../middleware/auth.js');


router.get('/getPosts', getPosts)
router.post('/createPosts', auth, createPosts)
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id', auth, getUpdate)
router.delete('/deletePost/:id', auth, deletePost)
router.get("/searchPost", searchPost)


module.exports = router