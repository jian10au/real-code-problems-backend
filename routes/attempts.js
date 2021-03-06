const express = require('express');
const router = express.Router({mergeParams: true});
const multer = require('multer')

const {index, create, update, destroy, result, upload} = require('../controllers/attemptsController.js');

//Multer middleware
const multerMiddleware = multer({ storage: multer.memoryStorage() }).fields([{name: 'image'}]);

router.get('/', index);
router.post('/', create);
//use post here as this update is coming via a HTML form, which does not support put methods
router.post('/:attemptid', update);
router.delete('/:id', destroy);
router.put('/:id/result', result)
router.post('/:id/upload', multerMiddleware, upload)

module.exports = router;