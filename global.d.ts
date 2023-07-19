<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';

declare global {
	namespace globalThis {
		var prismadb: PrismaClient;
	}
=======
import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
>>>>>>> be7ebc40c39679de53e9d65f66356e15cfc4f28c
}
