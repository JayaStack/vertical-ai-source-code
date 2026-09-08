UPDATE "BlogPost" SET "content" = '[]';
ALTER TABLE "BlogPost" ALTER COLUMN "content" TYPE JSONB USING content::jsonb;
