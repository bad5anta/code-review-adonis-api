'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class ApiV1UserController {
  async index () {
    const users = await User
      .query()
      .with('reviewers')
      .with('reviewee')
      .fetch()
    return users.toJSON().map(user => {
      user.reviewers = user.reviewers.map(ur => ({
        user_id: ur.id,
        tech_id: ur.pivot.tech_id
      }));
      user.reviewee = user.reviewee.map(ur => ({
        user_id: ur.id,
        tech_id: ur.pivot.tech_id
      }));
      return user;
    })
    return users
  }

  async setConnection ({ request }) {
    const { user_id, reviewer_id, tech_id } = request.post()
    const setReviewer = await Database
      .table('reviewers')
      .insert({
        user_id,
        reviewer_id,
        tech_id,
      })
    return {
      success: true,
      setReviewer,
    }
  }
}

module.exports = ApiV1UserController
