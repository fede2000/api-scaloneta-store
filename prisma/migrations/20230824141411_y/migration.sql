/*
  Warnings:

  - The primary key for the `OrderItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `OrderItems` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.

*/
-- DropIndex
DROP INDEX `OrderItems_id_key` ON `OrderItems`;

-- DropIndex
DROP INDEX `Orders_id_key` ON `Orders`;

-- DropIndex
DROP INDEX `Products_id_key` ON `Products`;

-- AlterTable
ALTER TABLE `OrderItems` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL DEFAULT (uuid()),
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Orders` ALTER COLUMN `id` DROP DEFAULT;
