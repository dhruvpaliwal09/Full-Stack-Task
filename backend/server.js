const express = require('express');
const cors = require('cors');

const app = express();
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
app.use(express.json())
app.use(cors());


//getmovie
app.get('/movie',async (req, res)=> {
    try {
        const movies = await prisma.movie.findMany();
        res.status(201.).json(movies);
        
    } catch (error) {
        console.log(error);
        res.status(404).json("Not Found")
    }
})

app.get('/shows',async (req, res)=> {
  try {
      const shows = await prisma.shows.findMany();
      res.status(201.).json(shows);
      
  } catch (error) {
      console.log(error);
      res.status(404).json("Not Found")
  }
})

app.get('/users',async (req, res)=> {
  try {
      const getuser = await prisma.user.findMany();
      res.status(201.).json(getuser);
      
  } catch (error) {
      console.log(error);
      res.status(404).json("Not Found")
  }
})

app.post('/signup', async (req, res) => {
    try {

      const { firstName, lastName, email, password } = req.body;

      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password, 
        },
      });
  
      console.log('User registered:', newUser);

      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      console.error('Error:', error);

      res.status(500).json({ message: 'Error registering user.' });
    }
  });

  app.delete('/users/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
  
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      await prisma.user.delete({
        where: { id: userId },
      });
  
      res.status(204).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
});