-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "birthday" TIMESTAMP(3),
    "birthPlace" TEXT,
    "deathday" TIMESTAMP(3),
    "details" TEXT,
    "signs" TEXT,
    "nationality" TEXT,
    "gender" TEXT,
    "religion" TEXT,
    "ideology" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alias" (
    "id" SERIAL NOT NULL,
    "_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "_createdBy" TEXT,
    "_updatedBy" TEXT,
    "description" TEXT,
    "firstName" TEXT,
    "secondName" TEXT,
    "surname" TEXT,
    "citizenship" TEXT,
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
    "series" TEXT,
    "issued" TIMESTAMP(3),
    "aliasId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Alias_id_key" ON "Alias"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pseudonym_id_key" ON "Pseudonym"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Document_id_key" ON "Document"("id");

-- CreateIndex
CREATE UNIQUE INDEX "File_id_key" ON "File"("id");

-- AddForeignKey
ALTER TABLE "Alias" ADD CONSTRAINT "Alias_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pseudonym" ADD CONSTRAINT "Pseudonym_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_aliasId_fkey" FOREIGN KEY ("aliasId") REFERENCES "Alias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
