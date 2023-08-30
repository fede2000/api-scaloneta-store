/*
  Warnings:

  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAddress` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shippingPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Orders` ADD COLUMN `shippingPrice` DOUBLE NOT NULL,
    ADD COLUMN `subTotal` DOUBLE NOT NULL,
    ADD COLUMN `total` DOUBLE NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `statusId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Products` ADD COLUMN `brand` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    MODIFY `categoryId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Status`;

-- DropTable
DROP TABLE `UserAddress`;

-- CreateTable
CREATE TABLE `States` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `state` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shippingDetails` (
    `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    `domicilio` VARCHAR(191) NOT NULL,
    `localidad` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
