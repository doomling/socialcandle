import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Social candle - boutique social & branding agency</title>
        <meta name="description" content="boutique social & branding agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoOriginal}
            src="https://doomvault.nyc3.digitaloceanspaces.com/resources/logo_white.png"
            width={232}
            height={215}
            alt="Candle logo"
          />

          <img
            className={styles.logo}
            src="https://doomvault.nyc3.digitaloceanspaces.com/resources/logo_white.png"
            width={232}
            height={215}
            alt="Candle logo"
          />
        </div>

        <div>
          <p className={styles.text}>boutique social & branding agency</p>
          <p className={styles.text}>COMING SOON</p>
        </div>
      </main>
    </div>
  );
}
