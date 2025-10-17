interface StatTableRowProps {
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
}

export const StatTableRow = ({ stats }: StatTableRowProps) => {
  return (
    <div className="grid grid-cols-8 gap-2 text-center text-xs font-mono bg-card border-y border-border py-1">
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">SP</span>
        <span>{stats.SP}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">RA</span>
        <span>{stats.RA}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">FI</span>
        <span>{stats.FI}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">SV</span>
        <span>{stats.SV}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">AR</span>
        <span>{stats.AR}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">HP</span>
        <span>{stats.HP}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">SZ</span>
        <span>{stats.SZ}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-muted-foreground">BASE</span>
        <span>{stats.BASE}</span>
      </div>
    </div>
  );
};
