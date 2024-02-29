/*
  Warnings:

  - You are about to drop the column `birthPlace` on the `Alias` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `Alias` table. All the data in the column will be lost.
  - You are about to drop the column `deathday` on the `Alias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Alias" DROP COLUMN "birthPlace",
DROP COLUMN "birthday",
DROP COLUMN "deathday";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "birthPlace" TEXT,
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "deathday" TIMESTAMP(3);
