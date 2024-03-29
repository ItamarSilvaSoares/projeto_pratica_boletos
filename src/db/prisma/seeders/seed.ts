/* eslint-disable max-lines-per-function */
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
      password: '$2a$08$7qEJmJxb0aYbo2SMy1odGuhBvpBvJOVA6dR8r2ph5fYxiAPFyLeCq',
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

  await prisma.$transaction([
    prisma.status.createMany({
      data: [
        { status: 'Pago' },
        { status: 'Vencido' },
        { status: 'Em aberto' }
      ],
      skipDuplicates: true
    })
  ]);

  console.log({ userOne });
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
