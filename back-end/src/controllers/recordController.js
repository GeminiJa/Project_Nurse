import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRecords = async (req, res) => {
  try {
    const records = await prisma.record.findMany();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Error fetching records" });
  }
};

export const addRecord = async (req, res) => {
  const { userId, category, subCategory, location, patientRoom, bed, date } = req.body;

  try {
    const record = await prisma.record.create({
      data: {
        userId,
        category,
        subCategory,
        location,
        patientRoom,
        bed,
        date,
      },
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to add record" });
  }
};

export const approveRecord = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.record.update({
      where: { id: Number(id) },
      data: { status: "approved" },
    });

    res.json({ message: "Record approved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve record" });
  }
};
