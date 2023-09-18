const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');

const prisma = new PrismaClient();

async function insertShows() {
  try {
    const rawData = await fs.readFile('shows.json');
    const showData = JSON.parse(rawData);

    await prisma.Shows.createMany({
      data: showData,
    });

    console.log('Show');
  } catch (error) {
    console.error('Error inserting shows ', error);
  }
}

insertShows()
  .catch((error) => {
    console.error('Error:', error);
  });
