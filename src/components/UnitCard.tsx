import { useState } from "react";
import { Pencil, Copy, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatTableRow } from "./StatTableRow";
import { WeaponRow } from "./WeaponRow";

interface UnitCardProps {
  id: string;
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
  onEdit?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export const UnitCard = ({
  name,
  customName,
  vp,
  stats,
  keywords = [],
  weapons = [],
  specialOrders,
  onEdit,
  onDuplicate,
  onDelete,
}: UnitCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-card border border-border rounded shadow-sm mb-2 overflow-hidden">
      {/* Header */}
      <div className="bg-primary/80 text-primary-foreground px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-primary-foreground/20 p-1 rounded transition-colors"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase">{customName || name}</span>
            <span className="text-xs bg-primary-foreground text-primary px-2 py-0.5 rounded font-bold">
              [{vp > 0 ? "+" : ""}{vp}]
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="h-6 w-6 p-0 hover:bg-primary-foreground/20"
          >
            <Pencil className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDuplicate}
            className="h-6 w-6 p-0 hover:bg-primary-foreground/20"
          >
            <Copy className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            className="h-6 w-6 p-0 hover:bg-destructive/80 hover:text-destructive-foreground"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-3 space-y-2">
          <StatTableRow stats={stats} />

          {keywords.length > 0 && (
            <div className="text-xs text-muted-foreground italic">
              {keywords.join(", ")}
            </div>
          )}

          {specialOrders && (
            <div className="text-xs italic text-foreground bg-muted/30 px-2 py-1 rounded">
              Special Orders: {specialOrders}
            </div>
          )}

          {weapons.length > 0 && (
            <div className="space-y-1">
              <div className="grid grid-cols-6 gap-2 text-xs font-bold text-muted-foreground border-b border-border pb-1">
                <div>Name</div>
                <div className="text-center">Weapon</div>
                <div className="text-center">Range</div>
                <div className="text-center">AP</div>
                <div className="text-center">Keywords</div>
                <div className="text-center">VP</div>
              </div>
              {weapons.map((weapon, idx) => (
                <WeaponRow key={idx} {...weapon} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
