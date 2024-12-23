"use client";

import Footer from "@/app/appComponents/Footer";
import Navbar from "@/app/appComponents/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const EXCHANGE_RATE = 0.012 // 1 INR = 0.012 USD (example rate)

function PriceDisplay({ priceINR }: { priceINR: number }) {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'INR' ? 'USD' : 'INR')
  }

  const displayPrice = currency === 'INR' ? priceINR : priceINR * EXCHANGE_RATE
  const formattedPrice = displayPrice.toFixed(2)

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardContent className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">{formattedPrice} {currency}</div>
        <Button onClick={toggleCurrency} variant="outline" className="border-2 border-gray-300">
          Switch to {currency === 'INR' ? 'USD' : 'INR'}
        </Button>
      </CardContent>
    </Card>
  )
}

function Page() {
  const [age, setAge] = useState("");

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setAge(age.toString());
  };

  return (
    <div
      className="
        min-h-screen w-full flex flex-col justify-center items-center gap-y-20 bg-white
        sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-y-20
        md:min-h-screen md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-y-20
        lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-20
        xl:min-h-screen xl:w-full xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-y-20
        2xl:min-h-screen 2xl:w-full 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:gap-y-20
    "
    >
      <div className="mt-10 w-full">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-7xl mx-auto">
          <CardContent className="flex flex-col items-center p-6 space-y-6">
            <img
              src="https://arkaconnection.in/wp-content/uploads/2024/01/90f37e_732dc7d9eb8344a4b204b9493d728043mv2.webp"
              alt=""
              className="rounded-full"
            />

            <h1 className="text-5xl font-bold text-center">
              Finding Shubh Muhurta
            </h1>

            <div className="text-xl text-center space-y-7 max-w-3xl">
              <p>
                Medical Astrology is an extremely specialized field. An expert
                astrologer can look at the birth chart of a person and able to
                pinpoint potential weaknesses or diseases.
              </p>

              <p>
                Medical Astrology can provide vital, life-saving information.
                Remember once health is lost everything is lost. Through its
                applications, one can solve medical problems before it's onset.
              </p>

              <p className=" text-2xl font-extrabold">
                What would you get in this Medicinal Astrology Consultancy?
              </p>
              <ul className=" text-xl text-center list-none pl-6 space-y-2">
                <li>Detailed Analysis and Timing of disease in the future.</li>
                <li>
                  If you have already suffering from the disease then the period
                  of good health or it's re-occurrence and when it can re-occur.
                </li>
                <li>Remedial Measures to Prevent or Cure Diseases</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Kundli / Birth Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold">Enter Birth Details</Label>
              <Input id="name" placeholder="Name" />
            </div>

            <Select defaultValue="male">
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-3 gap-4">
              <Input type="number" placeholder="23" />
              <Input type="number" placeholder="11" />
              <Input type="number" placeholder="2024" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Input type="number" placeholder="19" />
              <Input type="number" placeholder="0" />
              <Input type="number" placeholder="20" />
            </div>

            <Input placeholder="Birth place" />

            <Button className="w-full font-bold bg-black hover:bg-black/90" size="lg">
              GET KUNDLI
            </Button>
          </form>
        </CardContent>
      </Card>

      <PriceDisplay priceINR={3500} />

      <Footer />
    </div>
  );
}

export default Page;
