interface WeaponRowProps {
  name: string;
  range: string;
  ap?: string;
  keywords?: string;
  vp?: string;
  equipment?: string;
}

export const WeaponRow = ({ name, range, ap, keywords, vp, equipment }: WeaponRowProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 text-xs py-1 border-b border-border last:border-0 hover:bg-muted/30">
      <div className="font-semibold">{name}</div>
      <div className="text-center">{range}</div>
      <div className="text-center">{ap || "-"}</div>
      <div className="text-center">{keywords || "-"}</div>
      <div className="text-center">{equipment || "-"}</div>
      <div className="text-center font-bold">{vp || "-"}</div>
    </div>
  );
};
