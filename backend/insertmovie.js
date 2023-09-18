const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');

const prisma = new PrismaClient();

async function insertMovies() {
  try {
    const rawData = await fs.readFile('movies.json');
    const movieData = JSON.parse(rawData);

    const updatedMovieData = movieData.map((movie) => ({
      ...movie,
      year: parseInt(movie.year),
    }));

    await prisma.movie.createMany({
      data: updatedMovieData,
    });

    console.log('Movies insert hogyi');
  } catch (error) {
    console.error('Error inserting movies ', error);
  }
}

insertMovies()
  .catch((error) => {
    console.error('Error:', error);
  });
