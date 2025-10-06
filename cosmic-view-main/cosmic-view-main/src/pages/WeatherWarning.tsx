import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CloudRain, Wind, Snowflake, Zap } from "lucide-react";

interface Warning {
  id: string;
  severity: "high" | "medium" | "low";
  type: string;
  title: string;
  description: string;
  icon: typeof AlertTriangle;
  time: string;
}

const warnings: Warning[] = [
  {
    id: "1",
    severity: "high",
    type: "Thunderstorm",
    title: "Severe Thunderstorm Warning",
    description: "Strong thunderstorms expected with heavy rain, lightning, and possible hail. Seek shelter immediately.",
    icon: Zap,
    time: "Active until 9:00 PM",
  },
  {
    id: "2",
    severity: "medium",
    type: "Wind",
    title: "High Wind Advisory",
    description: "Strong winds up to 50 km/h expected. Secure loose objects and avoid outdoor activities.",
    icon: Wind,
    time: "Active until 11:00 PM",
  },
  {
    id: "3",
    severity: "low",
    type: "Rain",
    title: "Heavy Rain Alert",
    description: "Persistent heavy rain may cause localized flooding. Avoid low-lying areas.",
    icon: CloudRain,
    time: "Active until tomorrow 6:00 AM",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive";
    case "medium":
      return "warning";
    case "low":
      return "secondary";
    default:
      return "secondary";
  }
};

const WeatherWarning = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Weather Warnings</h1>
        <p className="text-muted-foreground">Stay informed about severe weather conditions</p>
      </div>

      <div className="space-y-6">
        {warnings.map((warning) => (
          <Alert
            key={warning.id}
            variant={getSeverityColor(warning.severity) as any}
            className="bg-gradient-card border-border/50 shadow-glow"
          >
            <div className="flex items-start gap-4">
              <warning.icon className="h-6 w-6 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTitle className="text-xl font-bold">{warning.title}</AlertTitle>
                  <Badge variant={getSeverityColor(warning.severity) as any} className="uppercase text-xs">
                    {warning.severity}
                  </Badge>
                </div>
                <AlertDescription className="text-base mb-3">{warning.description}</AlertDescription>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{warning.type}</span>
                  <span>•</span>
                  <span>{warning.time}</span>
                </div>
              </div>
            </div>
          </Alert>
        ))}
      </div>

      {/* Safety Tips */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              During Thunderstorms
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Stay indoors and away from windows</li>
              <li>• Avoid using electrical appliances</li>
              <li>• Stay away from tall objects outdoors</li>
              <li>• Wait 30 minutes after last thunder</li>
            </ul>
          </div>
          <div className="bg-gradient-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Wind className="h-5 w-5 text-primary" />
              During High Winds
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Secure loose outdoor items</li>
              <li>• Avoid parking under trees</li>
              <li>• Stay away from power lines</li>
              <li>• Drive carefully or avoid driving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWarning;
