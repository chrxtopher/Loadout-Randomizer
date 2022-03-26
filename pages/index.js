import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <body>
      <div className={styles.container}>
        <Head>
          <title>Loadout Randomizer</title>
        </Head>
        <h1>This is only the beginning.</h1>
        <p>This is my first Next.js project.</p>

        <Link href="/Randomizer">
          <button>
            <a>Cick here to randomize</a>
          </button>
        </Link>
      </div>
    </body>
  );
}
