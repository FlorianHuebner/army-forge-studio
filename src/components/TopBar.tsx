import { Button } from "@/components/ui/button";
import { X, BookOpen, List, Share2, Play } from "lucide-react";

interface TopBarProps {
  listName?: string;
  currentPoints: number;
  maxPoints: number;
}

export const TopBar = ({ listName = "NAMELESS", currentPoints, maxPoints }: TopBarProps) => {
  const remainingPoints = maxPoints - currentPoints;

  return (
    <div className="w-full bg-charcoal text-primary-foreground h-12 flex items-center justify-between px-4 border-b border-border">
      {/* Left controls */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          <X className="w-3 h-3 mr-1" />
          Close List
        </Button>
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          <BookOpen className="w-3 h-3 mr-1" />
          Quick Rules
        </Button>
      </div>

      {/* Center title */}
      <h1 className="text-lg font-bold uppercase tracking-wider">{listName}</h1>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          <List className="w-3 h-3 mr-1" />
          List
        </Button>
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          Reference
        </Button>
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          <Play className="w-3 h-3 mr-1" />
          Play
        </Button>
        <Button variant="ghost" size="sm" className="text-xs uppercase text-primary-foreground hover:bg-primary/20">
          <Share2 className="w-3 h-3 mr-1" />
          Share
        </Button>
        <div className="bg-primary-foreground text-charcoal px-3 py-1 rounded text-xs font-bold ml-2">
          {currentPoints} / {maxPoints} ({remainingPoints} Remaining)
        </div>
      </div>
    </div>
  );
};
