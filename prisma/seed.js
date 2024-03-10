const prisma = require ("../prisma");

const seed = async () => {
    // make 10 reservations
    for (let i =1; i < 10; i++){
        await prisma.customer.upsert({
            where: {id: i},
            update: {},
            create: {
                name: 'Customer ${i}'
            },

        });
    }
};

seed()
then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
