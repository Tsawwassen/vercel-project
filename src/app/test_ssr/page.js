import styles from "../page.module.css";
import React from 'react';

/**
 * SSR Example
 * 
 * Fetch path must be absolute URL
 * Set the base url in the env variable. For local machine, define it as localhost:3000, for production, set the same variable on the server with the servers base url
 * SSR does handle top level async functions
 * 
 */
async function getHello() {
  // Relative path works in server components both locally and on Vercel
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/hello`);
  const data = await res.json();
  return data;
}

export default async function Test_SSR() {
  const helloData = await getHello();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Test SSR</h1>
          <p>{helloData.message} SSR</p>
        </div>
      </main>
    </div>
  );
}
