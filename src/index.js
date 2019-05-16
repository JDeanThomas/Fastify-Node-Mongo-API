const fastify = require('fastify')({
    logger: true
})

// Require external modules
import { connect } from 'mongoose';

// Connect to DB
connect('mongodb://localhost/mycargarage')
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()