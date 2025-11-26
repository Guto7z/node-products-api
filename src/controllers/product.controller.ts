import { FastifyRequest, FastifyReply } from "fastify";
import { ProductService } from "../services/product.service.js";


class ProductController {
    
    async store(request: FastifyRequest, reply: FastifyReply) {

        // Query
        const {product_name, product_price} = request.body as {product_name: string, product_price: number}

        // Iniciar service
        const service = new ProductService()

        // executa a função do service passando os params
        const product = await service.post({product_name, product_price})

        reply.send(product)
    }
}