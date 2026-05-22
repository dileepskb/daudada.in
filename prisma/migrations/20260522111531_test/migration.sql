-- CreateTable
CREATE TABLE "testform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "user" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "amenities" TEXT NOT NULL,

    CONSTRAINT "testform_pkey" PRIMARY KEY ("id")
);
