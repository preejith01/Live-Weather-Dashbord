import { Cloud, Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from "lucide-react";
import { WeatherCard } from "@/components/WeatherCard";
import heroImage from "@/assets/weather-hero.jpg";

const Home = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden rounded-2xl mx-6 mt-6">
        <img
          src={heroImage}
          alt="Weather Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-accent text-sm font-medium mb-2">{currentDate}</p>
          <h1 className="text-6xl font-bold text-foreground mb-2">24°C</h1>
          <p className="text-xl text-muted-foreground">Partly Cloudy</p>
          <p className="text-lg text-muted-foreground mt-1">San Francisco, CA</p>
        </div>
      </div>

      {/* Weather Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <WeatherCard
          title="Humidity"
          value="68%"
          icon={Droplets}
          subtitle="Comfortable"
        />
        <WeatherCard
          title="Wind Speed"
          value="12 km/h"
          icon={Wind}
          subtitle="Light breeze"
        />
        <WeatherCard
          title="Visibility"
          value="10 km"
          icon={Eye}
          subtitle="Clear visibility"
        />
        <WeatherCard
          title="Pressure"
          value="1013 mb"
          icon={Gauge}
          subtitle="Normal"
        />
      </div>

      {/* Today's Forecast */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Today's Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { time: "Now", temp: "24°", icon: Cloud },
            { time: "15:00", temp: "26°", icon: Cloud },
            { time: "18:00", temp: "23°", icon: Cloud },
            { time: "21:00", temp: "20°", icon: Cloud },
            { time: "00:00", temp: "18°", icon: Cloud },
            { time: "03:00", temp: "16°", icon: Cloud },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 text-center hover:bg-card/80 transition-colors"
            >
              <p className="text-sm text-muted-foreground mb-2">{item.time}</p>
              <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-xl font-semibold">{item.temp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sun Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-gradient-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sunrise className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-semibold">Sunrise</h3>
          </div>
          <p className="text-3xl font-bold">6:42 AM</p>
          <p className="text-sm text-muted-foreground mt-1">Morning golden hour</p>
        </div>
        <div className="bg-gradient-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sunset className="h-6 w-6 text-warning" />
            <h3 className="text-lg font-semibold">Sunset</h3>
          </div>
          <p className="text-3xl font-bold">7:28 PM</p>
          <p className="text-sm text-muted-foreground mt-1">Evening golden hour</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
