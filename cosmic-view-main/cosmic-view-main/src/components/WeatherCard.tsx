import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface WeatherCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  subtitle?: string;
  className?: string;
}

export function WeatherCard({ title, value, icon: Icon, subtitle, className }: WeatherCardProps) {
  return (
    <Card className={`bg-gradient-card border-border/50 shadow-glow hover:shadow-glow/50 transition-all ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}
