// app/test_ssr/page.tsx
import styles from "../page.module.css";

export const dynamic = 'force-dynamic'; // Tell Next.js to render at request time

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

async function getHello() {
  const res = await fetch(`${getBaseUrl()}/api/hello`, { cache: 'no-store' });
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
