/*
  Warnings:

  - You are about to drop the column `canonical_url` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `og_description` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `og_image` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `og_title` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `robots` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `twitter_description` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `twitter_image` on the `Page` table. All the data in the column will be lost.
  - You are about to drop the column `twitter_title` on the `Page` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Page" DROP COLUMN "canonical_url",
DROP COLUMN "og_description",
DROP COLUMN "og_image",
DROP COLUMN "og_title",
DROP COLUMN "robots",
DROP COLUMN "twitter_description",
DROP COLUMN "twitter_image",
DROP COLUMN "twitter_title",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "copyright" TEXT,
ADD COLUMN     "dc_language" TEXT,
ADD COLUMN     "facebook_pixel_body" TEXT,
ADD COLUMN     "facebook_pixel_header" TEXT,
ADD COLUMN     "fb_admin" TEXT,
ADD COLUMN     "fb_og_description" TEXT,
ADD COLUMN     "fb_og_image" TEXT,
ADD COLUMN     "fb_og_title" TEXT,
ADD COLUMN     "geo_region" TEXT,
ADD COLUMN     "google_tag_manager_tracking_body" TEXT,
ADD COLUMN     "google_tag_manager_tracking_header" TEXT,
ADD COLUMN     "og_locale" TEXT,
ADD COLUMN     "og_locale_alternate" TEXT,
ADD COLUMN     "og_site_name" TEXT,
ADD COLUMN     "og_update_time" TEXT,
ADD COLUMN     "other_code" TEXT,
ADD COLUMN     "social_text_1" TEXT,
ADD COLUMN     "social_text_2" TEXT,
ADD COLUMN     "twitter_creator" TEXT,
ADD COLUMN     "twitter_og_description" TEXT,
ADD COLUMN     "twitter_og_image" TEXT,
ADD COLUMN     "twitter_og_title" TEXT,
ADD COLUMN     "twitter_site" TEXT;
