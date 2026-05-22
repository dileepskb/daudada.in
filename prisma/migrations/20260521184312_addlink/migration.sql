/*
  Warnings:

  - You are about to drop the column `link` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "link",
ADD COLUMN     "slug" TEXT;
