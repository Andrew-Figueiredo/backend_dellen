const  express = require('express');
const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();

routes.get('/', function(req, res) { res.json({hello : 'world'});});
routes.get('/users',UserController.index)

//create user
routes.post('/users',UserController.create)
routes.put('/users',UserController.update)

//Category
routes.get('/category',CategoryController.index)
routes.post('/category',CategoryController.create)

module.exports = routes;
