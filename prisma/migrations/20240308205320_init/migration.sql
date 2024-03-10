-- CreateTable
CREATE TABLE "customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "party_count" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL
);
