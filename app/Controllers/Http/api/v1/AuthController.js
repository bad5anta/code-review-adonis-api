'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class ApiV1AuthController {
  async signIn({ request, auth }) {
    const { email, password } = request.all().user
    return await auth.attempt(email, password)
  }

  async signUp({ request, auth }) {
    const { username, email, password } = request.all()
    await User.create(request.all())
    return await auth.attempt(email, password)
  }
}

module.exports = ApiV1AuthController
