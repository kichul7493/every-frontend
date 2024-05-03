/*
  Warnings:

  - Added the required column `code` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "code" VARCHAR(6) NOT NULL,
ADD COLUMN     "status" VARCHAR(10) NOT NULL;
