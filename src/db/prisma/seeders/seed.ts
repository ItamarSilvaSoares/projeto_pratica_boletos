import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const userOne = await prisma.user.upsert({
    where: { userId: 0 },
    update: {},
    create: {
      name: 'test',
      lastname: 'test',
      username: 'userOne',
      password: '12345678',
      cell: {
        create: [{
          cell: '123456789'
        }, {
          cell: '987654321'
        }]
      },
      email: {
        create: {
          email: 'userOne@test.com'
        }
      }
    }
  });

  const userTwo = await prisma.user.upsert({
    where: { userId: 0 },
    update: {},
    create: {
      name: 'test2',
      lastname: 'test',
      username: 'userTwo',
      password: '12345678',
      cell: {
        create: [{
          cell: '123456789'
        }, {
          cell: '987654321'
        }]
      },
      email: {
        create: [{
          email: 'userTwo@test.com'
        }, {
          email: 'twoUser@test.com'
        }]
      }
    }
  });

  console.log({ userOne, userTwo });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
