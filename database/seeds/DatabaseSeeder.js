'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Tech = use('App/Models/Tech')
const Database = use('Database')

class DatabaseSeeder {
  async run () {
    await Factory
      .model('App/Models/User')
      .createMany(5);

    await Promise.all(['VueJS', 'ReactJS', 'Rails', 'Adonis', 'EmberJS'].map(techName => {
      Tech.create({
        name: techName,
        icon: 'default.png',
      });
    }))

    await Promise.all([[1,4,1], [2,1,3], [3,1,4]].map(async ([user_id, reviewer_id, tech_id]) => {
      await Database
        .table('reviewers')
        .insert({
          user_id,
          reviewer_id,
          tech_id,
        })
    }))
  }
}

module.exports = DatabaseSeeder
