const Room = require('../model/Room')
const Boom = require('boom')

module.exports = {
    method: 'PUT',
    path: '/api/rooms',
    options: {
        handler: async (request, h) => {
            let room = await Room.findOne(
                { _id: request.payload._id }
            )

            if (!room) {
                return Boom.badRequest('Room does not exist')
            }

            room = await Room.findOne(
                { number: request.payload.number }
            )

            if (room && room.id !== request.payload._id) {
                return Boom.badRequest(`Room number ${request.payload.number} already exists!`)
            }

            await Room.updateOne(
                { _id: request.payload._id },
                { 
                    number: request.payload.number,
                    name: request.payload.name
                }
            )

            return { message: 'Successfully updated'}
        },
        auth: {
            strategy: 'jwt',
            scope: ['admin']
        },
        description: 'Update room',
        notes: 'Updates the room details',
        tags: ['api', 'room', 'admin']
    }
}