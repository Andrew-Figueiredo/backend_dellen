const  express = require('express');
const UserController = require('./controllers/UserController');
//const userController  =  UserController();

const routes = express.Router();

routes.get('/', function(req, res) { res.json({hello : 'world'});});
routes.get('/users',UserController.index)
module.exports = routes;
