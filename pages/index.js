import Head from "next/head";
import styles from "../styles/Home.module.css";
import weapons from "../data/vanguard/primaries.json";
import LoadoutCard from "../components/LoadoutCard";

export default function Home() {
  const testWeapon = weapons.data[0].ASSAULT_RIFLES[0];

  return (
    <body>
      <div className={styles.container}>
        <Head>
          <title>Loadout Randomizer</title>
        </Head>
        <h1>This is only the beginning.</h1>
        <p>This is my first Next.js project.</p>
      </div>
    </body>
  );
}
