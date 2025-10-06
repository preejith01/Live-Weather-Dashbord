import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Zap, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cloud,
      title: "Real-Time Updates",
      description: "Get instant weather updates with accurate forecasts powered by advanced meteorological data.",
    },
    {
      icon: Zap,
      title: "Severe Weather Alerts",
      description: "Stay safe with immediate notifications about dangerous weather conditions in your area.",
    },
    {
      icon: Shield,
      title: "Reliable Data",
      description: "Trust in our comprehensive weather data from multiple verified sources worldwide.",
    },
    {
      icon: TrendingUp,
      title: "Extended Forecasts",
      description: "Plan ahead with accurate 7-day forecasts and hourly weather predictions.",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">About Weather Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted companion for weather information and forecasts
          </p>
        </div>

        <Card className="mb-8 bg-gradient-card border-border/50 shadow-glow">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Weather Dashboard is designed to provide you with the most accurate and up-to-date weather
              information. We understand that weather affects every aspect of your daily life, from planning
              your commute to organizing outdoor activities.
            </p>
            <p>
              Our platform combines cutting-edge meteorological technology with an intuitive, beautiful
              interface to deliver weather data that you can trust and easily understand.
            </p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Technology</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="mb-4">
              Built with modern web technologies including React, TypeScript, and Tailwind CSS, our dashboard
              delivers a seamless experience across all devices. We prioritize performance, accessibility, and
              user experience in every aspect of our design.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">React</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">TypeScript</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">Tailwind CSS</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">Vite</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
