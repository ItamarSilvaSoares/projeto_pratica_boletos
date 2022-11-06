-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cell_phones` (
    `cell_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `cell` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cell_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cell_phones` ADD CONSTRAINT `cell_phones_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
