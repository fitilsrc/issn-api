-- DropIndex
DROP INDEX "Document_series_key";

-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "series" DROP NOT NULL;
