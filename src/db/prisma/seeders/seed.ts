import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const userOne = await prisma.user.upsert({
    where: { userId: 0 },
    update: {},
    create: {
      name: 'test',
      lastname: 'test',
      username: 'userOnes',
      password: '1234',
      cell: {
        create: [{
          cell: '123456789'
        }, {
          cell: '987654321'
        }]
      }
    }
  })
  const userTwo = await prisma.user.upsert({
    where: { userId: 0 },
    update: {},
    create: {
      name: 'test2',
      lastname: 'test',
      username: 'userTwo',
      password: '1234',
      cell: {
        create: [{
          cell: '123456789'
        }, {
          cell: '987654321'
        }]
      }
    }
  })

  console.log({ userOne, userTwo });
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })