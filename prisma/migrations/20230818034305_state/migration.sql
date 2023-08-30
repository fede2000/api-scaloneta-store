/*
  Warnings:

  - You are about to alter the column `statusId` on the `Orders` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `States` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `States` table. The data in that column could be lost. The data in that column will be cast from `VarChar(36)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Orders` MODIFY `statusId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `States` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
