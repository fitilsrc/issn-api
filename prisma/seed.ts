import persons from './data/persons.json';
import pseudonyms from './data/pseudonyms.json';
import aliases from './data/aliases.json';
import documents from './data/documents.json';
import { PrismaClient } from "@prisma/client";

/* eslint-disable prettier/prettier */
const prisma = new PrismaClient();

async function main() {
  await prisma.pseudonym.deleteMany();
  await prisma.document.deleteMany();
  await prisma.alias.deleteMany();
  await prisma.person.deleteMany();

  await prisma.person.createMany({
    data: persons
  });
  await prisma.pseudonym.createMany({
    data: pseudonyms
  });
  await prisma.alias.createMany({
    data: aliases
  });
  await prisma.document.createMany({
    data: documents
  });
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
