"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import VerticalTimeLine from "./VerticalTimeLine";

export default function Experience() {
  const { ref} = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
        <VerticalTimeLine/>
    </section>
  );
}