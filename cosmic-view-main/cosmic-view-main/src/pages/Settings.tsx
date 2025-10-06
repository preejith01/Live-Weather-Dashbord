import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Customize your weather dashboard experience</p>
        </div>

        <div className="space-y-6">
          {/* Units Settings */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Units</CardTitle>
              <CardDescription>Choose your preferred measurement units</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="temperature">Temperature</Label>
                  <p className="text-sm text-muted-foreground">Display temperature in Celsius or Fahrenheit</p>
                </div>
                <Select defaultValue="celsius">
                  <SelectTrigger id="temperature" className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">°C</SelectItem>
                    <SelectItem value="fahrenheit">°F</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="wind">Wind Speed</Label>
                  <p className="text-sm text-muted-foreground">Choose your preferred wind speed unit</p>
                </div>
                <Select defaultValue="kmh">
                  <SelectTrigger id="wind" className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kmh">km/h</SelectItem>
                    <SelectItem value="mph">mph</SelectItem>
                    <SelectItem value="ms">m/s</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your weather alert preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="severe-weather">Severe Weather Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about dangerous weather</p>
                </div>
                <Switch id="severe-weather" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="daily-forecast">Daily Forecast</Label>
                  <p className="text-sm text-muted-foreground">Receive daily weather summaries</p>
                </div>
                <Switch id="daily-forecast" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rain-alerts">Rain Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified before it rains</p>
                </div>
                <Switch id="rain-alerts" />
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="time-format">Time Format</Label>
                  <p className="text-sm text-muted-foreground">Choose between 12-hour and 24-hour format</p>
                </div>
                <Select defaultValue="12h">
                  <SelectTrigger id="time-format" className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12h">12-hour</SelectItem>
                    <SelectItem value="24h">24-hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable smooth animations</p>
                </div>
                <Switch id="animations" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
