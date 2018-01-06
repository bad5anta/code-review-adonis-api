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
  Route.post('auth/sign-in', 'api/v1/AuthController.signIn')
  Route.post('auth/sign-up', 'api/v1/AuthController.signUp')
}).prefix('api/v1');

Route.group(() => {
  Route.get('users', 'api/v1/UserController.index')
  Route.post('add-connection', 'api/v1/UserController.setConnection')
  Route.post('diffs', 'api/v1/DiffController.create')
  Route.get('diffs', 'api/v1/DiffController.allDiffs')
  Route.get('stacks', 'api/v1/DiffController.allTeches')
}).prefix('api/v1').middleware(['auth'])
