-- CreateTable
CREATE TABLE "_CarePackageItemToTypeCarePackage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CarePackageItemToTypeCarePackage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CarePackageItemToTypeCarePackage_B_index" ON "_CarePackageItemToTypeCarePackage"("B");

-- AddForeignKey
ALTER TABLE "_CarePackageItemToTypeCarePackage" ADD CONSTRAINT "_CarePackageItemToTypeCarePackage_A_fkey" FOREIGN KEY ("A") REFERENCES "CarePackageItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarePackageItemToTypeCarePackage" ADD CONSTRAINT "_CarePackageItemToTypeCarePackage_B_fkey" FOREIGN KEY ("B") REFERENCES "TypeCarePackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
