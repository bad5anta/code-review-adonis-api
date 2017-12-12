'use strict'

const Schema = use('Schema')

class TechSchema extends Schema {
  up () {
    this.create('teches', (table) => {
      table.increments()
      table.string('name', 40).notNullable().unique()
      table.string('icon', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('teches')
  }
}

module.exports = TechSchema
