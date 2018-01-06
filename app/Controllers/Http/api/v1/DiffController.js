'use strict'

const Diff = use('App/Models/Diff')
const Tech = use('App/Models/Tech')

class ApiV1DiffController {
    async create({ request, auth }) {
        const { content, tech_id } = request.all()
        const diff = await Diff.create({
            content,
            tech_id,
            author_id: auth.user.id,
            reviewer_id: 1,
            status: 10,
        })
        return diff
    }

    async allTeches() {
        return await Tech.all()
    }

    async allDiffs({ auth }) {
        return await Diff.query().where('author_id', '=', auth.user.id)
    }
}

module.exports = ApiV1DiffController
