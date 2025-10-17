import { UnitCard } from "./UnitCard";

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
}

interface UnitPreviewPanelProps {
  units: SelectedUnit[];
  onEditUnit: (id: string) => void;
  onDuplicateUnit: (id: string) => void;
  onDeleteUnit: (id: string) => void;
}

export const UnitPreviewPanel = ({
  units,
  onEditUnit,
  onDuplicateUnit,
  onDeleteUnit,
}: UnitPreviewPanelProps) => {
  // Group units by name for display
  const groupedUnits: { [key: string]: SelectedUnit[] } = {};
  units.forEach((unit) => {
    const groupKey = unit.name.toUpperCase();
    if (!groupedUnits[groupKey]) {
      groupedUnits[groupKey] = [];
    }
    groupedUnits[groupKey].push(unit);
  });

  return (
    <div className="space-y-4">
      {Object.entries(groupedUnits).map(([groupName, groupUnits]) => (
        <div key={groupName} className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-2">
            {groupName}
          </h3>
          {groupUnits.map((unit) => (
            <UnitCard
              key={unit.id}
              {...unit}
              onEdit={() => onEditUnit(unit.id)}
              onDuplicate={() => onDuplicateUnit(unit.id)}
              onDelete={() => onDeleteUnit(unit.id)}
            />
          ))}
        </div>
      ))}

      {units.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-sm">No units selected</p>
          <p className="text-xs mt-1">Add units from the catalog to build your army</p>
        </div>
      )}
    </div>
  );
};
