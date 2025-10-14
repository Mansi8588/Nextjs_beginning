// to connect to database we need prisma client

// import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient();

import { PrismaClient } from "../generated/prisma";
export const prisma = new PrismaClient();
