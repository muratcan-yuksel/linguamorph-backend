// This is your Prisma seed file,
// learn more about it in the docs: https://pris.ly/d/prisma-seed

// Import PrismaClient from prisma/client
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define the users and files to be created
const userData = [
  {
    email: 'user1@example.com',
    password: 'password1',
    files: [
      {
        name: 'file1',
        type: 'audio/mp3',
        url: 'https://s3.amazonaws.com/mybucket/file1.mp3',
      },
      {
        name: 'file2',
        type: 'audio/mp3',
        url: 'https://s3.amazonaws.com/mybucket/file2.mp3',
      },
    ],
  },
  {
    email: 'user2@example.com',
    password: 'password2',
    files: [
      {
        name: 'file3',
        type: 'audio/mp3',
        url: 'https://s3.amazonaws.com/mybucket/file3.mp3',
      },
      {
        name: 'file4',
        type: 'audio/mp3',
        url: 'https://s3.amazonaws.com/mybucket/file4.mp3',
      },
    ],
  },
];

// Define the seed function
async function seed() {
  // Loop through the users and files and create them in the database
  for (const user of userData) {
    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        files: {
          create: user.files,
        },
      },
    });

    console.log(`Created user with email: ${createdUser.email}`);
  }
}

// Call the seed function
seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    // Disconnect PrismaClient
    await prisma.$disconnect();
  });
