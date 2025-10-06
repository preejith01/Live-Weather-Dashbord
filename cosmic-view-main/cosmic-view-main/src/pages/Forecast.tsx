import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";

interface DayForecast {
  day: string;
  date: string;
  high: string;
  low: string;
  condition: string;
  icon: typeof Cloud;
  precipitation: string;
}

const forecast: DayForecast[] = [
  {
    day: "Monday",
    date: "Oct 7",
    high: "26°",
    low: "18°",
    condition: "Partly Cloudy",
    icon: Cloud,
    precipitation: "10%",
  },
  {
    day: "Tuesday",
    date: "Oct 8",
    high: "28°",
    low: "19°",
    condition: "Sunny",
    icon: Sun,
    precipitation: "5%",
  },
  {
    day: "Wednesday",
    date: "Oct 9",
    high: "24°",
    low: "17°",
    condition: "Rainy",
    icon: CloudRain,
    precipitation: "80%",
  },
  {
    day: "Thursday",
    date: "Oct 10",
    high: "22°",
    low: "16°",
    condition: "Cloudy",
    icon: Cloud,
    precipitation: "30%",
  },
  {
    day: "Friday",
    date: "Oct 11",
    high: "25°",
    low: "18°",
    condition: "Partly Cloudy",
    icon: Cloud,
    precipitation: "15%",
  },
  {
    day: "Saturday",
    date: "Oct 12",
    high: "27°",
    low: "19°",
    condition: "Sunny",
    icon: Sun,
    precipitation: "0%",
  },
  {
    day: "Sunday",
    date: "Oct 13",
    high: "29°",
    low: "20°",
    condition: "Sunny",
    icon: Sun,
    precipitation: "0%",
  },
];

const Forecast = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">7-Day Forecast</h1>
        <p className="text-muted-foreground">Extended weather outlook for your location</p>
      </div>

      <div className="space-y-4">
        {forecast.map((day, index) => (
          <Card
            key={index}
            className="bg-gradient-card border-border/50 hover:shadow-glow transition-all"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-24">
                    <p className="font-semibold text-lg">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <day.icon className="h-10 w-10 text-primary" />
                    <p className="text-muted-foreground w-32">{day.condition}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{day.precipitation}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{day.high}</span>
                    <span className="text-xl text-muted-foreground">{day.low}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Weekly Summary */}
      <Card className="mt-8 bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle>Weekly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Average High</p>
              <p className="text-3xl font-bold text-primary">26°C</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Average Low</p>
              <p className="text-3xl font-bold text-accent">18°C</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Rain Days</p>
              <p className="text-3xl font-bold">2 days</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecast;
