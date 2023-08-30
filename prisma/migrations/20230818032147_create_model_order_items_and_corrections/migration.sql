/*
  Warnings:

  - The primary key for the `OrderItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `OrderItems` table. The data in that column could be lost. The data in that column will be cast from `VarChar(36)` to `Int`.
  - You are about to drop the `shippingDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `OrderItems` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ordersId` VARCHAR(191) NOT NULL,
    MODIFY `productsId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `shippingDetails`;

-- CreateTable
CREATE TABLE `ShippingDetails` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `domicilio` VARCHAR(191) NOT NULL,
    `localidad` VARCHAR(191) NOT NULL,
    `ordersId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
