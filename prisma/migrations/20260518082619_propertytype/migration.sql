/*
  Warnings:

  - You are about to drop the column `property` on the `Lead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "property",
ADD COLUMN     "property_type" TEXT;

-- AlterTable
ALTER TABLE "Property" ALTER COLUMN "price" DROP NOT NULL;
