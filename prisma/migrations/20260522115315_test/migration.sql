/*
  Warnings:

  - Changed the type of `specification` on the `testform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "testform" DROP COLUMN "specification",
ADD COLUMN     "specification" JSONB NOT NULL;
