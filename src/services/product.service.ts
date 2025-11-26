import prismaClient from "../prisma/index.js"

interface ProductServiceProps {
    product_name: string,
    product_price: number
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

}

export { ProductService }