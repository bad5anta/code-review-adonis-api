'use strict'

const Model = use('Model')

class Diff extends Model {
  getStatus (status) {
    const statusesDictionary = {
      10: 'new',
      20: 'reviewed',
    }
 
    return statusesDictionary[status]
  }
}

module.exports = Diff
