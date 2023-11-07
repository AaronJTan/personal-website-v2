"use client"

import Navigation from "@/components/Navigation/Navigation";
import { useState } from "react";
import { navigation } from "@/config/navigationConfig";

export default function Home() {
  const [currSection, setCurrSection] = useState(Object.keys(navigation)[0]);

  return (
    <main className="px-4 md:px-20 mt-3">
      <Navigation 
        currSection={currSection} 
        setCurrSection={setCurrSection} 
      />
    </main>
  );
}
