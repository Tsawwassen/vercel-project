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
- Frontend/Backend
- - Next.js
- Database
- - Postgres via Neon
- ORM
- - Drizzle ORM 
- - - Not sure what this is tbh
- Authentication
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


# Refresher Note
## New Pages
- Createa folder inside the src/app folder, the new folder name will be the route.
- Inside the folder, create a page.js file. This will be what is loaded when viewing the route
## API
- Create a folder inside the src/app/api folder, this new folder name will be the route.
- Inside the folder, create a route.js file. This will be the code that is used when the route endpoint is fetched
- to use SSR + Fetch, the path must be absolute URL, not relative.
  - To solve this problem, I put the localhostL:3000 as an .env variable, and used that variable in the fetch path
  - When the project is deployed, I would need to create a env variable on the server, and name it the same thing as the local variable for the code to function correctly.
- If the fetch call was on a CSR page, then I can use relative
## CSR vs SSR
- See test_csr and test_ssr to see the same page rendered via SSR and CSR