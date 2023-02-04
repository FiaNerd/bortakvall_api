/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `UnsignedInt`.
  - The primary key for the `OrderItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `product_id` on the `OrderItems` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `UnsignedInt`.
  - You are about to alter the column `order_id` on the `OrderItems` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `UnsignedInt`.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `UnsignedInt`.

*/
-- DropForeignKey
ALTER TABLE `OrderItems` DROP FOREIGN KEY `OrderItems_order_id_fkey`;

-- AlterTable
ALTER TABLE `Order` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `OrderItems` DROP PRIMARY KEY,
    MODIFY `product_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `order_id` INTEGER UNSIGNED NOT NULL,
    ADD PRIMARY KEY (`product_id`);

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
