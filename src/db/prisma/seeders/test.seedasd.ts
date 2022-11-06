import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const test = await prisma.user.upsert({
    where: { user_id: 0 },
    update: {},
    create: {
      name: 'test',
      lastname: 'test',
      password: 'esquilo',
      cell: {
        create: [{
          cell: '123456789',
        },
        {
          cell: '147258369'
        }
        ],


      },

    },
  })

  const test2 = await prisma.user.upsert({
    where: { user_id: 0 },
    update: {},
    create: {
      name: 'test2',
      lastname: 'test',
      password: 'esquilo2'

    },
  })
  console.log({ test, test2 })
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