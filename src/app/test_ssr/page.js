// app/test_ssr/page.tsx
import styles from "../page.module.css";
import { GET as helloAPI } from '../api/hello/route';

export const dynamic = 'force-dynamic'; // Tell Next.js to render at request time

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};


export default async function Test_SSR() {
  const res = await helloAPI();
  const helloData = await res.json();

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
