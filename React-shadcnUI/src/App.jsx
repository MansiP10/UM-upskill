import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [role, setRole] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [experience, setExperience] = useState(3);
  const [darkMode, setDarkMode] = useState(false);
  const [gender, setGender] = useState("");

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "min-h-screen"}>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Shadcn UI Comprehensive Form</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4 text-center">
              User Information Form
            </h2>

            {/* Name Field */}
            <Label htmlFor="name" className="block mb-2">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email Field */}
            <Label htmlFor="email" className="block mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Select Role */}
            <Label className="block mb-2">Select Role</Label>
            <Select onValueChange={(value) => setRole(value)}>
              <SelectTrigger className="mb-4">
                <SelectValue placeholder="Choose a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>

            {/* Feedback Textarea */}
            <Label htmlFor="feedback" className="block mb-2">
              Feedback
            </Label>
            <Textarea
              id="feedback"
              placeholder="Share your feedback"
              className="mb-4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            {/* Experience Slider */}
            <Label className="block mb-2">Years of Experience: {experience}</Label>
            <Slider
              value={[experience]}
              min={0}
              max={10}
              step={1}
              className="mb-4"
              onValueChange={(value) => setExperience(value[0])}
            />

            {/* Radio Group for Gender */}
            <Label className="block mb-2">Select Gender</Label>
            <RadioGroup
              className="mb-4"
              value={gender}
              onValueChange={(value) => setGender(value)}
            >
              <div className="flex items-center space-x-4">
                <div>
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="ml-2">Male</Label>
                </div>
                <div>
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="ml-2">Female</Label>
                </div>
                <div>
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="ml-2">Other</Label>
                </div>
              </div>
            </RadioGroup>

            {/* Subscribe Checkbox */}
            <div className="flex items-center mb-4">
              <Checkbox
                id="subscribe"
                checked={subscribe}
                onCheckedChange={setSubscribe}
              />
              <Label htmlFor="subscribe" className="ml-2">
                Subscribe to Newsletter
              </Label>
            </div>

            {/* Dark Mode Switch */}
            <div className="flex items-center mb-4">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              <Label htmlFor="dark-mode" className="ml-2">
                Enable Dark Mode
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              onClick={() =>
                alert(
                  `Name: ${name}, Email: ${email}, Role: ${role}, Feedback: ${feedback}, Experience: ${experience} years, Gender: ${gender}, Subscribed: ${subscribe}, Dark Mode: ${darkMode}`
                )
              }
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 Shadcn UI Workshop</p>
      </footer>
    </div>
  );
}

export default App;
