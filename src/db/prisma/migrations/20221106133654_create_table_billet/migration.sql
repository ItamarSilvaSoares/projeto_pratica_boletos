-- CreateTable
CREATE TABLE `Billet` (
    `billet_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `validity` DATETIME(3) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`billet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Billet` ADD CONSTRAINT `Billet_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
