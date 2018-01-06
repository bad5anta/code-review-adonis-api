'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }

  getRole (role) {
    const rolesDictionary = {
      10: 'admin',
      20: 'dev',
    }

    return rolesDictionary[role]
  }

  reviewers () {
    return this
      .belongsToMany(
        'App/Models/User',
        'user_id',
        'reviewer_id'
      )
      .pivotTable('reviewers')
      .withPivot(['tech_id']);
  }

  reviewee () {
    return this
      .belongsToMany(
        'App/Models/User',
        'reviewer_id',
        'user_id'
      )
      .pivotTable('reviewers')
      .withPivot(['tech_id']);
  }
}

module.exports = User
