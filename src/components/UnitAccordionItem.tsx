import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleBadge } from "./RoleBadge";
import { StatTableRow } from "./StatTableRow";
import { WeaponRow } from "./WeaponRow";

type RoleType = "Troop" | "Specialist" | "Support" | "Leader" | "Legend";

interface UnitAccordionItemProps {
  id: string;
  name: string;
  role: RoleType;
  pointsCostBase: number;
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
  onAdd?: () => void;
}

export const UnitAccordionItem = ({
  name,
  role,
  pointsCostBase,
  stats,
  keywords = [],
  weapons = [],
  onAdd,
}: UnitAccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border rounded overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-primary text-primary-foreground px-4 py-2 flex items-center justify-between hover:bg-accent transition-colors"
      >
        <div className="flex items-center gap-3">
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
          <span className="text-sm font-bold uppercase tracking-wide">{name}</span>
        </div>
        <RoleBadge role={role} points={pointsCostBase} />
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="bg-card p-3 space-y-3">
          {/* Stats */}
          <StatTableRow stats={stats} />

          {/* Keywords */}
          {keywords.length > 0 && (
            <div className="bg-charcoal text-primary-foreground px-3 py-2 text-xs italic">
              {keywords.join(", ")}
            </div>
          )}

          {/* Weapons Table */}
          {weapons.length > 0 && (
            <div className="space-y-1">
              <div className="grid grid-cols-6 gap-2 text-xs font-bold text-muted-foreground border-b-2 border-border pb-1">
                <div>Name</div>
                <div className="text-center">Range</div>
                <div className="text-center">AP</div>
                <div className="text-center">Keywords</div>
                <div className="text-center">Equipment</div>
                <div className="text-center">VP</div>
              </div>
              {weapons.map((weapon, idx) => (
                <WeaponRow key={idx} {...weapon} />
              ))}
            </div>
          )}

          {/* Add Button */}
          <div className="flex justify-center pt-2">
            <Button
              onClick={onAdd}
              size="sm"
              className="bg-primary hover:bg-accent text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Unit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
