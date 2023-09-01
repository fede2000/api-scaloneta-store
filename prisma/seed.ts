import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

export async function seed() {
  await prisma.category.createMany({
    data: [
      {
        category: 'Indumentaria Masculina',
      },
      {
        category: 'Indumentaria Femenina',
      },
      {
        category: 'Decoracion',
      },
      {
        category: 'Accesorios',
      },
      {
        category: 'Juguetes',
      },
    ]
  })
  //   await prisma.role.createMany({
  //       data:[
  //           {role: 'admin'},
  //           {role: 'user' }
  //       ]
  //   });
    

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