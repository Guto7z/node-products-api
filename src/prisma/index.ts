import { PrismaClient } from "@prisma/client";

// Iniciar o prisma para uso do ORM
const prismaClient = new PrismaClient()

export default prismaClient