// import { PrismaClient } from "@prisma/client";

// declare global {
//     namespace NodeJS {
//       interface Global {}
//     }
//   }
// interface CustomNodeJsGlobal extends NodeJS.Global {
//     prisma: PrismaClient;
// }

// declare const global: CustomNodeJsGlobal;

// const prisma = global.prisma || new PrismaClient();

// if(process.env.Node_ENV === "developent") global.prisma = prisma;

// export default prisma;

import { Prisma, PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient<
  Prisma.PrismaClientOptions,
  never
> | null;

export function createPrismaClient() {
  prismaClient = new PrismaClient();
  prismaClient.$use(async (params, next) => {
    // Check incoming query type
    if (params.action == "delete") {
      // Delete queries
      // Change action to an update
      params.action = "update";
      params.args["data"] = { deleted_at: new Date() };
    }
    return next(params);
  });
  return prismaClient;
}

export function prisma() {
  if (!prismaClient) {
    prismaClient = createPrismaClient();
  }
  return prismaClient;
}

