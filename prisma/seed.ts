import { PrismaClient } from "@prisma/client";
import { products } from "./products";
const prisma = new PrismaClient();

export async function seed() {
  await prisma.states.createMany({
    data: [
      {
        state: 'active',
      },
      {
        state: 'pending',
      },
      {
        state: 'cancelled',
      },
      {
        state: 'disabled',
      },
      {
        state: 'approved',
      },
      {
        state: 'rejected',
      },

    ]
  })
    await prisma.role.createMany({
        data:[
            {role: 'admin'},
            {role: 'user' }
        ]
    });
    // await prisma.products.createMany({
    //   data:[
    //     {
    //       name: 'Camiseta Titular AFA',
    //       imgUrl: 'ta-seleccion-hombre.jpg?raw=true',
    //       description: '1 producir contenido virgen.',
    //       price: 23000,
    //       brand: "Adidas" ,
    //       categoryId: 1,
    //     },
    //     {
    //       name: 'Camiseta Copa America',
    //       imgUrl: 'ic/rica-3.jpg?raw=true',
    //       description: 'r reciclado, 49 % poliéster.',
    //       price: 20000,
    //       brand: "Adidas" ,
    //       categoryId: 1,
    //     },
    //     {
    //       name: '¡La del Dibu!',
    //       imgUrl: 'ublig?raw=true',
    //       description: 'yn las ju mayor tensión.',
    //       price: 15000,
    //       brand: "Adidas" ,
    //       categoryId: 1,
    //     },
    //   ]
    // })
    // for (let product of products){
    //   await prisma.products.createMany({
    //     data:  product
    //   })
      
    // }
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })