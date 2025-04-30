/*
  Warnings:

  - You are about to drop the column `dateBirh` on the `Child` table. All the data in the column will be lost.
  - You are about to drop the column `dateBirth` on the `Person` table. All the data in the column will be lost.
  - Added the required column `birthdayDate` to the `Child` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdayDate` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Child" DROP COLUMN "dateBirh",
ADD COLUMN     "birthdayDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "dateBirth",
ADD COLUMN     "birthdayDate" DATE NOT NULL;
