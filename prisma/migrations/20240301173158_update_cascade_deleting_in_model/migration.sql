-- DropForeignKey
ALTER TABLE "Alias" DROP CONSTRAINT "Alias_personId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_aliasId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_personId_fkey";

-- DropForeignKey
ALTER TABLE "Pseudonym" DROP CONSTRAINT "Pseudonym_personId_fkey";

-- AddForeignKey
ALTER TABLE "Alias" ADD CONSTRAINT "Alias_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pseudonym" ADD CONSTRAINT "Pseudonym_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_aliasId_fkey" FOREIGN KEY ("aliasId") REFERENCES "Alias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
