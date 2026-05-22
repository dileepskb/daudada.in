/*
  Warnings:

  - The `specification` column on the `testform` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `amenities` column on the `testform` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "testform" DROP COLUMN "specification",
ADD COLUMN     "specification" TEXT[],
DROP COLUMN "amenities",
ADD COLUMN     "amenities" TEXT[];
