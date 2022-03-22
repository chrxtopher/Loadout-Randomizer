import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loadout Randomizer</title>
      </Head>
      <body>
        <h1>This is only the beginning.</h1>
        <p>This is my first Next.js project.</p>
      </body>
    </div>
  );
}
