/*
  Warnings:

  - The primary key for the `OrderItems` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `OrderItems` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    ADD PRIMARY KEY (`id`);
