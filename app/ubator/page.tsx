import InkubatorPage from "@/src/components/pg-inkubator";
import { Hero } from "@/src/components/pg-inkubator/Hero";
import { BuilderTrack } from "@/src/components/pg-inkubator/BuildTrack";
import { EcosystemGrants } from "@/src/components/pg-inkubator/EcosystemGrants";
import { Footer } from "@/src/components/pg-inkubator/Footer";
import { Nav } from "@/src/components/pg-inkubator/Nav";
import { Overview } from "@/src/components/pg-inkubator/Overview";
import { SidebarMenu } from "@/src/components/pg-inkubator/SidebarMenu/SidebarMenu";
import React from "react";

export const metadata = {
  title: "ink!ubator | Take your ink! project to new depths.",
  description:
    "ink!ubator provides access to core developers and a wealth of resources.<br/>" +
    "The first cohort has successfully concluded, and applications for the next cohort are now open.",
};

export default function PageInkubator() {
  return (
    <div className="font-montserrat bg-gray-900 rounded-b-3xl">
      <div className="bg-light-background dark:bg-dark-background rounded-b-3xl xl:pb-12 pb-4 md:pt-40 pt-28">
        <Nav />
        <SidebarMenu />
        <Hero className="overflow-hidden" />
        <Overview />
        <BuilderTrack />
        <EcosystemGrants />
      </div>
      <Footer />
    </div>
  );
}
