import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all listings
router.get("/", async (req, res) => {
    const listings = await prisma.listing.findMany();
    res.json(listings);
});

// Create a new listing
router.post("/", async (req, res) => {
    const { userId, title, description, price, imageUrl } = req.body;

    try {
        const listing = await prisma.listing.create({
            data: { userId, title, description, price, imageUrl }
        });
        res.status(201).json(listing);
    } catch (error) {
        res.status(400).json({ error: "Error creating listing" });
    }
});

// Update a listing
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, price, imageUrl } = req.body;

    try {
        const listing = await prisma.listing.update({
            where: { id },
            data: { title, description, price, imageUrl }
        });
        res.json(listing);
    } catch (error) {
        res.status(400).json({ error: "Error updating listing" });
    }
});

// Delete a listing
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.listing.delete({ where: { id } });
        res.json({ message: "Listing deleted" });
    } catch (error) {
        res.status(400).json({ error: "Error deleting listing" });
    }
});

export default router;
