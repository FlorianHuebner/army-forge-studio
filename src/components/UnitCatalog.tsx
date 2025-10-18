import { UnitAccordionItem } from "./UnitAccordionItem";

interface UnitCatalogProps {
  onAddUnit: (unitId: string) => void;
}

// Mock data - will be replaced with API data
const mockUnits = [
  {
    id: "scuttler",
    name: "SCUTTLER",
    role: "Troop" as const,
    pointsCostBase: 7,
    stats: { SP: "1/2", RA: 2, FI: "5+", SV: "6+", AR: 4, HP: 2, SZ: 1, BASE: "25mm" },
    keywords: ["Agile", "Beast", "Evade", "Horde"],
    weapons: [
      { name: "Pincers", range: "CC", ap: "-", keywords: "-", vp: "-" }
    ]
  },
  {
    id: "gunslinger",
    name: "GUNSLINGER",
    role: "Troop" as const,
    pointsCostBase: 13,
    stats: { SP: "1/2", RA: 3, FI: "5+", SV: "6+", AR: 2, HP: 3, SZ: 1, BASE: "25mm" },
    keywords: ["Agile"],
    weapons: [
      { name: "Pistols", range: "R6", ap: "-", keywords: "-", vp: "-" }
    ]
  },
  {
    id: "psychotroid",
    name: "PSYCHOTROID",
    role: "Leader" as const,
    pointsCostBase: 36,
    stats: { SP: "1/2", RA: 4, FI: "6+", SV: "5+", AR: 1, HP: 3, SZ: 2, BASE: "40mm" },
    keywords: ["Beast", "Recon(5+)", "Resilient(2)", "Tenacious"],
    weapons: [
      { name: "Brain Freeze", range: "R4", ap: "-", keywords: "Psychic, Stun", vp: "-" },
      { name: "Mind Control", range: "R4", ap: "-", keywords: "Psychic, Suppression", vp: "-" },
      { name: "Hyperkinesis", range: "R2", ap: "-", keywords: "Inorganic, Psychic", vp: "-" }
    ]
  },
  {
    id: "magnumite",
    name: "MAGNUMITE",
    role: "Specialist" as const,
    pointsCostBase: 28,
    stats: { SP: "1/2", RA: 3, FI: "5+", SV: "5+", AR: 2, HP: 4, SZ: 3, BASE: "40mm" },
    keywords: ["Beast", "Resilient(1)", "Tenacious"],
    weapons: [
      { name: "Massive Claws", range: "CC", ap: "AP2", keywords: "-", vp: "[+26] 3VP" }
    ]
  },
  {
    id: "bathomite",
    name: "BATHOMITE",
    role: "Support" as const,
    pointsCostBase: 27,
    stats: { SP: "1/2", RA: 5, FI: "4+", SV: "5+", AR: 2, HP: 5, SZ: 4, BASE: "60mm" },
    keywords: ["Beast", "Solid", "Tenacious"],
    weapons: [
      { name: "Psionic Disruptor", range: "R4", ap: "-", keywords: "Psychic, Suppression", vp: "[-3] 1VP" },
      { name: "Crystal Launcher", range: "R5", ap: "-", keywords: "Frag(4), Indirect, Prey", vp: "[-7] 1VP" },
      { name: "Crystal Cannon", range: "R8", ap: "AP4", keywords: "Prey, Weight of Fire(1)", vp: "[+11] 1VP" }
    ]
  }
];

export const UnitCatalog = ({ onAddUnit }: UnitCatalogProps) => {
  return (
    <div className="space-y-2">
      {mockUnits.map((unit) => (
        <UnitAccordionItem
          key={unit.id}
          {...unit}
          onAdd={() => onAddUnit(unit.id)}
        />
      ))}
    </div>
  );
};
