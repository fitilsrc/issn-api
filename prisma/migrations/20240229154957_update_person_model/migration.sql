/*
  Warnings:

  - You are about to drop the column `gender` on the `Alias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Alias" DROP COLUMN "gender",
ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "details" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "ideology" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "religion" TEXT,
ADD COLUMN     "signs" TEXT;

-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "uri" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
