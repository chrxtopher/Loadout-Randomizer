import Image from "next/image";

export default function LoadoutCard({ weapon }) {
  return (
    <div className="loadout-card">
      <div className="loadout-card-title">
        <h2>Placeholder</h2>
      </div>
      <div className="loadout-card-body">
        <div className="loadout-card-col-1">
          <h3>{`name`}</h3>
        </div>
        <div className="loadout-card-col-2">
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
}
