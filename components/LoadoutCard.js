import Image from "next/image";

export default function LoadoutCard({ weapon }) {
  return (
    <div className="loadout-card">
      <div className="loadout-card-title">
        <h2>Placeholder</h2>
      </div>
      <div className="loadout-card-body">
        <div className="loadout-card-col-1">
          <Image
            src={`/images/primaries/${weapon.name}.png`}
            width={800}
            height={425}
          />
          <h3>{weapon.name}</h3>
          <p>
            Muzzle:{" "}
            {
              weapon.attachments.muzzle[
                Math.floor(Math.random() * weapon.attachments.muzzle.length) + 1
              ]
            }
          </p>
        </div>
        <div className="loadout-card-col-2">
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
}
