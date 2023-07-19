<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;

//nextjs hot reloading means that every code change, our code updates and reloads.
//upon reloading, prisma creates a new instance of PrismaClient. You will then get an error of too many instances.
//This fix saves your prisma client to a global file which isn't affected by hot reloading.
=======
import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismadb = client;

export default client;
>>>>>>> be7ebc40c39679de53e9d65f66356e15cfc4f28c
