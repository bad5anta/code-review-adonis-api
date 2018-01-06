'use strict'

const Schema = use('Schema')

class DiffSchema extends Schema {
  up () {
    this.create('diffs', (table) => {
      table.increments()
      table.text('content').notNullable()
      table.integer('author_id').unsigned().references('id').inTable('users')
      table.integer('reviewer_id').unsigned().references('id').inTable('users')
      table.integer('tech_id').unsigned().references('id').inTable('teches')
      table.integer('status').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diffs')
  }
}

module.exports = DiffSchema
