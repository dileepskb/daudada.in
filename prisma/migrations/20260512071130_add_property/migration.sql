-- CreateTable
CREATE TABLE "PropertyCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "PropertyCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PropertyCategory" ADD CONSTRAINT "PropertyCategory_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
