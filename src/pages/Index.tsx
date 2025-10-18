import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { UnitCatalog } from "@/components/UnitCatalog";
import { UnitPreviewPanel } from "@/components/UnitPreviewPanel";
import { SummaryBox } from "@/components/SummaryBox";
import { toast } from "sonner";

interface SelectedUnit {
  id: string;
  catalogId: string;
  name: string;
  customName?: string;
  vp: number;
  stats: {
    SP: string | number;
    RA: string | number;
    FI: string | number;
    SV: string | number;
    AR: string | number;
    HP: string | number;
    SZ: string | number;
    BASE: string;
  };
  keywords?: string[];
  weapons?: Array<{
    name: string;
    range: string;
    ap?: string;
    keywords?: string;
    vp?: string;
  }>;
  specialOrders?: string;
  pointsCost: number;
  role: string;
}

const Index = () => {
  const [selectedUnits, setSelectedUnits] = useState<SelectedUnit[]>([]);
  const maxPoints = 150;

  // Mock unit database
  const unitDatabase: { [key: string]: any } = {
    scuttler: {
      name: "SCUTTLER",
      role: "Troop",
      pointsCost: 14,
      vp: 19,
      stats: { SP: "1/2", RA: 2, FI: "5+", SV: "6+", AR: 4, HP: 2, SZ: 1, BASE: "25mm" },
      keywords: ["Agile", "Beast", "Evade", "Horde"],
      weapons: [{ name: "Pincers", range: "CC", ap: "-", keywords: "-", vp: "-" }],
    },
    gunslinger: {
      name: "GUNSLINGER",
      role: "Troop",
      pointsCost: 13,
      vp: 13,
      stats: { SP: "1/2", RA: 3, FI: "5+", SV: "6+", AR: 2, HP: 3, SZ: 1, BASE: "25mm" },
      keywords: ["Agile"],
      weapons: [{ name: "Pistols", range: "R6", ap: "-", keywords: "-", vp: "-" }],
    },
    psychotroid: {
      name: "PSYCHOTROID",
      role: "Leader",
      pointsCost: 36,
      vp: 36,
      stats: { SP: "1/2", RA: 4, FI: "6+", SV: "5+", AR: 1, HP: 3, SZ: 2, BASE: "40mm" },
      keywords: ["Beast", "Recon(5+)", "Resilient(2)", "Tenacious"],
      weapons: [
        { name: "Brain Freeze", range: "R4", ap: "-", keywords: "Psychic, Stun", vp: "-" },
        { name: "Mind Control", range: "R4", ap: "-", keywords: "Psychic, Suppression", vp: "-" },
        { name: "Hyperkinesis", range: "R2", ap: "-", keywords: "Inorganic, Psychic", vp: "-" },
      ],
      specialOrders: "Aura of Dread",
    },
    magnumite: {
      name: "MAGNUMITE",
      role: "Specialist",
      pointsCost: 28,
      vp: 26,
      stats: { SP: "1/2", RA: 3, FI: "5+", SV: "5+", AR: 2, HP: 4, SZ: 3, BASE: "40mm" },
      keywords: ["Beast", "Resilient(1)", "Tenacious"],
      weapons: [{ name: "Massive Claws", range: "CC", ap: "AP2", keywords: "-", vp: "[+26] 3VP" }],
    },
    bathomite: {
      name: "BATHOMITE",
      role: "Support",
      pointsCost: 27,
      vp: 27,
      stats: { SP: "1/2", RA: 5, FI: "4+", SV: "5+", AR: 2, HP: 5, SZ: 4, BASE: "60mm" },
      keywords: ["Beast", "Solid", "Tenacious"],
      weapons: [
        { name: "Psionic Disruptor", range: "R4", ap: "-", keywords: "Psychic, Suppression", vp: "[-3] 1VP" },
        { name: "Crystal Launcher", range: "R5", ap: "-", keywords: "Frag(4), Indirect, Prey", vp: "[-7] 1VP" },
        { name: "Crystal Cannon", range: "R8", ap: "AP4", keywords: "Prey, Weight of Fire(1)", vp: "[+11] 1VP" },
      ],
    },
  };

  const handleAddUnit = (catalogId: string) => {
    const unitData = unitDatabase[catalogId];
    if (!unitData) return;

    const currentPoints = selectedUnits.reduce((sum, u) => sum + u.pointsCost, 0);
    if (currentPoints + unitData.pointsCost > maxPoints) {
      toast.error("Cannot add unit", {
        description: `Would exceed maximum points (${maxPoints})`,
      });
      return;
    }

    const newUnit: SelectedUnit = {
      id: `${catalogId}-${Date.now()}`,
      catalogId,
      ...unitData,
    };

    setSelectedUnits([...selectedUnits, newUnit]);
    toast.success("Unit added", {
      description: `${unitData.name} added to roster`,
    });
  };

  const handleEditUnit = (id: string) => {
    toast.info("Edit feature coming soon");
  };

  const handleDuplicateUnit = (id: string) => {
    const unit = selectedUnits.find((u) => u.id === id);
    if (!unit) return;

    const currentPoints = selectedUnits.reduce((sum, u) => sum + u.pointsCost, 0);
    if (currentPoints + unit.pointsCost > maxPoints) {
      toast.error("Cannot duplicate unit", {
        description: `Would exceed maximum points (${maxPoints})`,
      });
      return;
    }

    const duplicatedUnit = {
      ...unit,
      id: `${unit.catalogId}-${Date.now()}`,
    };

    setSelectedUnits([...selectedUnits, duplicatedUnit]);
    toast.success("Unit duplicated");
  };

  const handleDeleteUnit = (id: string) => {
    setSelectedUnits(selectedUnits.filter((u) => u.id !== id));
    toast.success("Unit removed");
  };

  // Calculate totals
  const currentPoints = selectedUnits.reduce((sum, u) => sum + u.pointsCost, 0);
  const totalVP = selectedUnits.reduce((sum, u) => sum + u.vp, 0);
  const troops = selectedUnits.filter((u) => u.role === "Troop").length;
  const specialists = selectedUnits.filter((u) => u.role === "Specialist").length;
  const support = selectedUnits.filter((u) => u.role === "Support").length;
  const leaders = selectedUnits.filter((u) => u.role === "Leader").length;
  const legends = selectedUnits.filter((u) => u.role === "Legend").length;

  const slotsText = `[0/0 Support] - [${specialists}/2 Specialist] - [0/1 Legend]`;

  return (
    <div className="min-h-screen bg-background">
      <TopBar listName="NAMELESS" currentPoints={currentPoints} maxPoints={maxPoints} />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4">
          {/* Left Column - Unit Catalog */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2 px-2">
              Available Units
            </h2>
            <UnitCatalog onAddUnit={handleAddUnit} />
          </div>

          {/* Right Column - Preview & Summary */}
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3 px-2">
                List Valid.
              </h2>
              <UnitPreviewPanel
                units={selectedUnits}
                onEditUnit={handleEditUnit}
                onDuplicateUnit={handleDuplicateUnit}
                onDeleteUnit={handleDeleteUnit}
              />
            </div>

            <SummaryBox
              totalUnits={selectedUnits.length}
              troops={troops}
              specialists={specialists}
              support={support}
              leaders={leaders}
              legends={legends}
              totalVP={totalVP}
              slotsText={slotsText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
