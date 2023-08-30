-- DropIndex
DROP INDEX `States_id_key` ON `States`;

-- DropIndex
DROP INDEX `States_state_key` ON `States`;

-- AlterTable
ALTER TABLE `OrderItems` ALTER COLUMN `id` DROP DEFAULT;
