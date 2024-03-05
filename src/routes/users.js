const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

router.get('/', userController.getUser);

router.post('/', userController.createUser);

router.patch('/:idUser', userController.updateUser);

router.delete('/:idUser', userController.deleteUser);

module.exports = router;
