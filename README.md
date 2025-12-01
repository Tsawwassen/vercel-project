This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

--------------------
# Weekend Project
Long time since i've done this, so lets give it a try
## Goal
- Host a next.js app on Vercel
- Have an api backend
- Have the backend communicate with a database
- - Only my backend can communicate with the database, and only my frontend can communicate with the backend
- Have user authentication

## Plan
Used ChatGPT to give me a rough plan of action. This was not a copy/paste a full working app. Im using actual 'Get Started' guides to learn each step of the stack to do what i need it to do based on the 'how can i do X' question that comes up
- DONE - Frontend/Backend
- - Next.js
- Database
- - Postgres via Neon
- ORM
- - Drizzle ORM 
- - - Not sure what this is tbh
- DONE - Authentication
- - Clerk
- UI
- - Tailwind
- - - Not a huge priority for me on this one, but I should learn some of it.

### Stack Visualization (Given by ChatGPT, used as a guide)
```markdown
Frontend (Next.js)
  ⬇️ fetch('/api/...') or server actions
Backend (Vercel serverless via Next.js API routes)
  ⬇️ Drizzle ORM (using Neon DB connection string)
Postgres (Neon)
```


# Next.js Refresher Note
## New Pages
- Create a folder inside the src/app folder, the new folder name will be the route.
- Inside the folder, create a page.js file. This will be what is loaded when viewing the route
## API
- Create a folder inside the src/app/api folder, this new folder name will be the route.
- Inside the folder, create a route.js file. This will be the code that is used when the route endpoint is fetched
- Accessing the API works differently on SSR and CSR
  - SSR requires you to call the API as an imported function
    - import { GET as helloAPI } from '../api/hello/route';
    - const res = await helloAPI();
  - CSR requires you to call the API as a fetch function
    - const res = await fetch('/api/hello');
    - const data = await res.json();

# Authentication
- This is done. super easy with Clerk documentation
- Add a proxy.js file inside /src
  - Same level as /app. 
  - The way im thinking of this is when the site gets a request, it enters the src folder, then proxy.js, then app folder
  - The proxy file has a list of public routes. If the the route is added to the list, it can be accessed without being signed in
    - The current example is a super basic setup. I'm not sure what else i can do in clerkMiddleware and what the config variable does
  - any route not listed in this file will be considered private and require the user to be signed in
    - If the user is not signed in and tries to access a private page, they will be redirected to a signin page
    - currently using default Clerk settings
  - Inside the layout.js file there is <SignedIn> and <SignedOut> tags which are used a conditional rendering different header links
    - Basic example, im sure I can do something different. It was the default setting 
  - Adding /api/public to the public route list will allow for public access to endpoints in the path
    - and by deffinition, items in /api/private will be blocked if the user is not signed in.


# Database notes
- Full Documentation
  - https://orm.drizzle.team/docs
- drizzle.config.ts 
  - database info and project setup.
  - I think it's used by Drizzle
- schema.ts
  - file to create database schema
  - When I make a proper database, i should probably learn the syntax for making a relational database
- Make database schema, 
  - pnpm drizzle-kit generate
    - This will take the JS code and convert it to a sql type file (rough understanding)
- Push updated schema to Neon, 
  - pnpm drizzle-kit migrate
- Seed the database
  - pnpm  ts-node src/db/seed.ts
- src/lib/db.ts 
  - This seems to be just a helper file to easily import the db object
  - With this object, you can communicate with the database
    - Example usage of the import is in the seed.ts file
    - In actual usage, I can import db on the server to interact with the database
  - Couple notes about the db connection object
    - Drizzle allows me to use syntax like db.query.user.findFirst()
      - {database}.{action}.{table}.{function}
    - The Neon package is an easy way to connect to my Neon database, and then drizzle can use it that connection


# Weekend 0
- Current state
  - User can login
  - CSR and SSR are both functioning
  - Able to block pages if user is not signed in

# Weekend 1
- Still to do
  - DONE - Have a public page, other then the login
  - DONE - Ensure that API is only accessible to my app (ie no public access)
  - Connect with a database
    - Just do a basic CRUD setup
    - DONE* - Ensure that only my app can connect with the database
      - This is handled by clerk auth
      - * The one thing to note is that if a user is allowed to access the database function
        - Example, only select users have access to update a record
    - Because the db object is only used on the server (either in private or public api folders), this will allow only my app to talk with the database
      - Check if this is true
      - NOTE - Never import the db object inside a 'use client' component. This would expose the database to the client


# Future Plan Notes
- Make different access levels for users
- Do automated testing....
- ESLint ?
  - Currently there is a bug that giving me an error. This seems to be a know issue and only started a couple days ago
