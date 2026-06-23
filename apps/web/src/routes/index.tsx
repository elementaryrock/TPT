import { createFileRoute } from "@tanstack/react-router";

import HeroSection from "@/components/sections/hero";
import WhatIsTptSection from "@/components/sections/what-is-tpt";
import OrganisersSection from "@/components/sections/organisers";
import RegistrationSection from "@/components/sections/registration";
import HighlightsSection from "@/components/sections/highlights";
import ScheduleSection from "@/components/sections/schedule";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export const Route = createFileRoute("/")(  {
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <WhatIsTptSection />
      <OrganisersSection />
      <RegistrationSection />
      <HighlightsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
