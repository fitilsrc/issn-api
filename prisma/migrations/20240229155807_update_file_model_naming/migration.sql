/*
  Warnings:

  - You are about to drop the `Files` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_personId_fkey";

-- DropTable
DROP TABLE "Files";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "uri" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
