/*
  Warnings:

  - Added the required column `propertyType` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('Residential', 'Agricultural', 'Commercial');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "propertyType" TEXT NOT NULL;
