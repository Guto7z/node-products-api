import { FastifyRequest, FastifyReply } from "fastify";
import { ProductService } from "../services/product.service.js";


class ProductController {

    async store(request: FastifyRequest, reply: FastifyReply) {

        // Query
        const { product_name, product_price } = request.body as { product_name: string, product_price: number }

        // Iniciar service
        const service = new ProductService()

        // executa a função do service passando os params
        const product = await service.post({ product_name, product_price })

        reply.send({
            "status": 201,
            "message": "Produto registrado com sucesso.",
            "data": product
        })
    }

    async index(reply: FastifyReply) {

        const service = new ProductService()

        const product = await service.get()

        reply.send({
            "status": 200,
            "message": "Requisição ok!",
            "data": product
        })
    }

    async show(request: FastifyRequest, reply: FastifyReply) {

        const { product_id } = request.params as { product_id: string }

        const service = new ProductService()

        const product = await service.getId({ product_id })

        reply.send({
            "status": 200,
            "message": "Requisição ok!",
            "data": product
        })
    }

    async update(request: FastifyRequest, reply: FastifyReply) {

        const { product_id } = request.params as { product_id: string }

        const { product_name, product_price } = request.body as { product_name: string, product_price: number }

        const service = new ProductService()

        const product = await service.put({product_id, product_name, product_price})

        reply.send({
            "status": 200,
            "message": "Produto atualizado com sucesso.",
            "data": product 
        })
    }

    async destroy(request: FastifyRequest, reply: FastifyReply) {

        const { product_id } = request.params as { product_id: string }

        const service = new ProductService()

        const product = await service.delete({ product_id })

        reply.send({
            "status": 200,
            "message": "Produto deletado com sucesso.",
            "data": product
        })
    }
}

export { ProductController }