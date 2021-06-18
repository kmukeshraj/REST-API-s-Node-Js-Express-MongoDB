const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('getting a list of all products...');
})

router.post('/', (req, res, next) => {
    res.send('product created...');
})

router.get('/:id', (req, res, next) => {

    res.send('getting a single products...');
})

router.patch('/:id', (req, res, next) => {

    res.send('updating a single products...');
})

router.delete('/:id', (req, res, next) => {

    res.send('deleting a single products...');
})

module.exports = router;