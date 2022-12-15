/*
  Warnings:

  - You are about to alter the column `value` on the `billets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `billets` MODIFY `value` DOUBLE NOT NULL;
