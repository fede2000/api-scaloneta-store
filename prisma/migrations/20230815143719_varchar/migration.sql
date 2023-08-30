/*
  Warnings:

  - You are about to alter the column `name` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `imgUrl` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `imgUrl` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(400) NOT NULL;
