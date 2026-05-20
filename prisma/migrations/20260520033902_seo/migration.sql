-- CreateTable
CREATE TABLE "Seo" (
    "id" SERIAL NOT NULL,
    "page_url" TEXT NOT NULL,
    "meta_title" TEXT,
    "meta_description" TEXT,
    "meta_keywords" TEXT,
    "og_title" TEXT,
    "og_description" TEXT,
    "og_image" TEXT,
    "twitter_title" TEXT,
    "twitter_description" TEXT,
    "twitter_image" TEXT,
    "canonical_url" TEXT,
    "schema" JSONB,
    "gtag_head" TEXT,
    "custom_head" TEXT,
    "robots" TEXT DEFAULT 'index, follow',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seo_page_url_key" ON "Seo"("page_url");
