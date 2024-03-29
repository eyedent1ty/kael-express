import { PrismaClient } from '@prisma/client/extension';

const prisma = new PrismaClient();

interface MyRequest {
  prisma: PrismaClient;
}

interface MyResponse {}

type MyNextFunction = () => void;

export default async function prismaMiddlware(
  req: MyRequest,
  res: MyResponse,
  next: MyNextFunction
) {
  req.prisma = prisma;
  next();
}
