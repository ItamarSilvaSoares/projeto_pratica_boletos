-- CreateTable
CREATE TABLE `emails` (
    `email_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`email_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `emails` ADD CONSTRAINT `emails_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
