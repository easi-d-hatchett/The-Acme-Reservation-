const prisma = require ("../prisma");

const seed = async () => {
    // make 10 customers
    for (let i =1; i < 10; i++){
        await prisma.customer.upsert({
            where: {id: i},
            update: {},
            create: {
                name: 'Customer ${i}'
            },

        });
    }

    // make 10 resturants
    for (let i =1; i < 10; i++){
        await prisma.restaurant.upsert({
            where: {id: i},
            update: {},
            create: {
                name: ' resturants ${ i %4 }',
            },

        });
    }

    // make reservation
    for (let i =1; i < 10; i++){
        await prisma.reservation.upsert({
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
