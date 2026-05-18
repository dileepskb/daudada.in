/*
  Warnings:

  - Added the required column `expected_price` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "area" TEXT,
ADD COLUMN     "expected_price" TEXT NOT NULL,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "property" TEXT,
ADD COLUMN     "unit" TEXT;
