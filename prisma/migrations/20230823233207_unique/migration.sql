/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `OrderItems` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `States` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `OrderItems_id_key` ON `OrderItems`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Orders_id_key` ON `Orders`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Products_id_key` ON `Products`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `States_id_key` ON `States`(`id`);
