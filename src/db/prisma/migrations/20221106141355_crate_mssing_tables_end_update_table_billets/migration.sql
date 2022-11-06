/*
  Warnings:

  - You are about to drop the `Billet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Billet` DROP FOREIGN KEY `Billet_id_user_fkey`;

-- DropTable
DROP TABLE `Billet`;

-- CreateTable
CREATE TABLE `billets` (
    `billet_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_description` INTEGER NOT NULL,
    `id_status` INTEGER NOT NULL,
    `id_line` INTEGER NOT NULL,
    `validity` DATETIME(3) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`billet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `descriptions` (
    `description_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `creatAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`description_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `status_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`status_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scannable_lines` (
    `line_id` INTEGER NOT NULL AUTO_INCREMENT,
    `line` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`line_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `billets` ADD CONSTRAINT `billets_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `billets` ADD CONSTRAINT `billets_id_description_fkey` FOREIGN KEY (`id_description`) REFERENCES `descriptions`(`description_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `billets` ADD CONSTRAINT `billets_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `status`(`status_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `billets` ADD CONSTRAINT `billets_id_line_fkey` FOREIGN KEY (`id_line`) REFERENCES `scannable_lines`(`line_id`) ON DELETE CASCADE ON UPDATE CASCADE;
