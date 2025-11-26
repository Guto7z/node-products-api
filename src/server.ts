import Fastify from 'fastify'
import { routes } from './routes.js'
import cors from '@fastify/cors'

// Iniciar fastify
const app = Fastify({ logger: true })

// Iniciar backend na 3333
const init = async () => {

    // Instalar no app
    await app.register(cors)
    await app.register(routes)

    try {

        // conn com a porta: 3333
        await app.listen({ port: 3333 })
    } catch (err) {

        process.exit(1)
    }
}

// chama a fn
init()