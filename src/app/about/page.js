import styles from "../page.module.css";


export default async function Test_SSR() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Public Aboud Page</h1>
        </div>
      </main>
    </div>
  );
}
