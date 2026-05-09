-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "location" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);
