import prismaClient from "../prisma/index.js"

interface ProductServiceProps {
    product_id?: string
    product_name?: string,
    product_price?: number
}

class ProductService {

    // Criar produto
    async post({ product_name, product_price }: ProductServiceProps) {

        if (!product_name || !product_price) {

            throw new Error("Preencha todos os campos!")
        }

        const product = await prismaClient.product.create({
            data: {
                product_name,
                product_price
            }
        })

        return product
    }

    // Listar todos os produtos
    async get() {

        const products = await prismaClient.product.findMany()

        return products
    }

    // Listar produto específico
    async getId({ product_id }: ProductServiceProps) {

        if (!product_id) {

            throw new Error("Produto não encontrado.")
        }

        const product = await prismaClient.product.findUnique({
            where: {
                product_id
            }
        })

        return product
    }

    // Atualizar produto específico
    async put({ product_id, product_name, product_price }: ProductServiceProps) {

        if (!product_id) {

            throw new Error("Produto não encontrado.")
        }

        if (!product_name || !product_price) {

            throw new Error("Preencha todos os campos!")
        }

        const product = await prismaClient.product.update({
            where: {
                product_id
            },
            data: {
                product_name,
                product_price
            }
        })

        return product

    }

    // Deletar produto específico
    async delete({ product_id }: ProductServiceProps) {

        if (!product_id) {

            throw new Error("Produto não encontrado.")
        }

        const product = await prismaClient.product.delete({
            where: {
                product_id
            }
        })

        return product
    }

}

export { ProductService }