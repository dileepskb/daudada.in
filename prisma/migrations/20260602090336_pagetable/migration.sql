/*
  Warnings:

  - You are about to drop the column `meta_keywords` on the `Page` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Page" DROP COLUMN "meta_keywords",
ADD COLUMN     "meta_keyword" TEXT;
