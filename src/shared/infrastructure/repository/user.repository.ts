import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export default class UserRepository {

    async getAll() {
        try{
            await prisma.$connect()
            const users: User[] = await prisma.user.findMany()
            return users
        } catch(error) {
            await prisma.$disconnect()
        }
    }
}