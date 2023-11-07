"use client"

import Navigation from "@/components/Navigation/Navigation";
import { useState } from "react";
import { navigation } from "@/config/navigationConfig";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState(navigation[0]);

  return (
    <main className="px-4 md:px-20 mt-3">
      <Navigation 
        selectedSection={selectedSection} 
        setSelectedSection={setSelectedSection} 
      />

      {selectedSection.component}
    </main>
  );
}
