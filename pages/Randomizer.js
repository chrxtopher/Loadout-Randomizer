import { useState } from "react";
import LoadoutCard from "../components/LoadoutCard";
import emptyLoadout from "../data/emptyLoadout.json";
import Link from "next/link";

export default function Randomizer() {
  const [loadout, setLoadout] = useState({ ...emptyLoadout });

  return (
    <>
      <h1>Randomizer Page</h1>
      <LoadoutCard />
      <Link href="/">
        <button>
          <a>Back to Home</a>
        </button>
      </Link>

      <button>Randomize</button>
    </>
  );
}
