# react-nextjs-demo

A basic todo app developed to understand the fundamentals of Next.js using typescript with Prisma as ORM for using SQLite DB.

Command to create the project - 
  > * already inside required folder
    > npx create-next-app@latest .
  > * to automatically generate folder with necessary files 
    > npx create-next-app@latest <project-name>
  
Setup Prisam - 
  > * npm i prisma --save-dev
  > * npx prisma init --datasource-provider sqlite
  > * create necessary schema for DB tables in  schema.prisma file
  > * npx prisma migrate dev --name <db-name>

To access PrismaClient anywhere in the project refer the code used in db.ts file.
