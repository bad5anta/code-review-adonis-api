'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

const User = use('App/Models/User')

Route.group(() => {
  Route.get('users', 'api/v1/UserController.index')
  Route.post('add-connection', 'api/v1/UserController.setConnection')
}).prefix('api/v1');
