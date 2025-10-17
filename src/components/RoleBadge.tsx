import { Star, Triangle, Shield, Crown, Swords } from "lucide-react";

type RoleType = "Troop" | "Specialist" | "Support" | "Leader" | "Legend";

interface RoleBadgeProps {
  role: RoleType;
  points?: number;
}

const roleIcons = {
  Troop: Triangle,
  Specialist: Swords,
  Support: Shield,
  Leader: Star,
  Legend: Crown,
};

export const RoleBadge = ({ role, points }: RoleBadgeProps) => {
  const Icon = roleIcons[role];

  return (
    <div className="flex items-center gap-1 text-xs uppercase font-semibold text-muted-foreground">
      <Icon className="w-3 h-3" />
      <span>{role}</span>
      {points !== undefined && <span className="ml-1">[{points}+]</span>}
    </div>
  );
};
