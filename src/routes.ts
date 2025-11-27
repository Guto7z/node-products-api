import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ProductController } from "./controllers/product.controller.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    // POST
    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ProductController().store(request, reply)
    })

    // GET
    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ProductController().index(reply)
    })

    // GET ID
    fastify.get("/product/:product_id", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ProductController().show(request, reply)
    })

    // PUT
    fastify.put("/product/:product_id", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ProductController().update(request, reply)
    })

    // DELETE
    fastify.delete("/product/:product_id", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ProductController().destroy(request, reply)
    })

}