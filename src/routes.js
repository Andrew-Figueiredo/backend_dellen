const  express = require('express');
//import UserController from './controllers/UserController';
//const userController  =  UserController();

const routes = express.Router();

routes.get('/', function(req, res) { res.json({hello : 'world'});});

module.exports = routes;
