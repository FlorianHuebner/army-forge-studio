interface SummaryBoxProps {
  totalUnits: number;
  troops: number;
  specialists: number;
  support: number;
  leaders: number;
  legends: number;
  totalVP: number;
  slotsText: string;
}

export const SummaryBox = ({
  totalUnits,
  troops,
  specialists,
  support,
  leaders,
  legends,
  totalVP,
  slotsText,
}: SummaryBoxProps) => {
  return (
    <div className="bg-card border border-border rounded shadow-sm p-4 space-y-3">
      {/* Totals Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        <div className="flex justify-between border-b border-border pb-1">
          <span className="font-semibold">Total Units:</span>
          <span>{totalUnits}</span>
        </div>
        <div className="flex justify-between border-b border-border pb-1">
          <span className="font-semibold">Total VP:</span>
          <span>{totalVP}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Troops/Unlocking:</span>
          <span>{troops}/2</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Specialists:</span>
          <span>{specialists}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Support:</span>
          <span>{support}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Leaders:</span>
          <span>{leaders}</span>
        </div>
        <div className="flex justify-between col-span-2 border-b border-border pb-1">
          <span className="font-semibold">Legend:</span>
          <span>{legends}</span>
        </div>
      </div>

      {/* Slots Available */}
      <div className="bg-muted/30 p-2 rounded text-xs">
        <span className="font-semibold">Current Slots Available: </span>
        <span>{slotsText}</span>
      </div>

      {/* Orders and Keywords */}
      <div className="border-t border-border pt-3">
        <h4 className="text-xs font-bold uppercase tracking-wide mb-2">Orders and Keywords</h4>
        <p className="text-xs text-muted-foreground italic">
          Available with a Deadzone Bronze, Silver or Gold subscription
        </p>
      </div>
    </div>
  );
};
