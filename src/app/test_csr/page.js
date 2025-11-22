'use client'

import styles from "../page.module.css";
import React from 'react';
import { useEffect, useState } from 'react';

/**
 * CSR Example
 * 
 * Fetch path msut be relative URL
 * SSR does not handle top level async functions
 * * Need to use a state variable and useEffect to handle async calls
 * 
 */

export default function Test_CSR() {

    const [helloData, setHelloData] = useState();

    useEffect(() => {
      async function fetchHello() {
        const res = await fetch('/api/hello');
        const data = await res.json();
        setHelloData(data);
      }

      fetchHello();
    }, []);

    if (!helloData) return <p>Loading...</p>;
  
    return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Test CSR</h1>
          <p>{helloData.message} CSR</p>
        </div>
      </main>
    </div>
  );
}
