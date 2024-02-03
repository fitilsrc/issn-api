-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alias" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "firstName" TEXT,
    "secondName" TEXT,
    "surname" TEXT,
    "birthday" TIMESTAMP(3),
    "deathday" TIMESTAMP(3),
    "birthPlace" TEXT,
    "citizenship" TEXT,
    "gender" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Alias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pseudonym" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "title" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Pseudonym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "title" TEXT,
    "series" TEXT NOT NULL,
    "issued" TIMESTAMP(3),
    "aliasId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alias_personId_key" ON "Alias"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "Pseudonym_personId_key" ON "Pseudonym"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_series_key" ON "Document"("series");

-- CreateIndex
CREATE UNIQUE INDEX "Document_aliasId_key" ON "Document"("aliasId");

-- AddForeignKey
ALTER TABLE "Alias" ADD CONSTRAINT "Alias_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pseudonym" ADD CONSTRAINT "Pseudonym_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_aliasId_fkey" FOREIGN KEY ("aliasId") REFERENCES "Alias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
