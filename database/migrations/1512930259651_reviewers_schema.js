'use strict'

const Schema = use('Schema')

class ReviewersSchema extends Schema {
  up () {
    this.create('reviewers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('reviewer_id').unsigned().references('id').inTable('users')
      table.integer('tech_id').unsigned().references('id').inTable('teches')
      table.timestamps()
    })
  }

  down () {
    this.drop('reviewers')
  }
}

module.exports = ReviewersSchema
