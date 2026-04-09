"use client";

import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSectionTitle() {
  return (
    <SectionTitle
      className="mt-16 sm:mt-20"
      eyebrow="Selected Work"
      title="My Projects"
      subtitle="Recent builds"
      iconSrc="/icons/projects.png"
      iconAlt="Projects"
    />
  );
}
