"use client";

import SectionTitle from "../ui/SectionTitle";

export default function EducationTitle({
  title = "Education",
  subtitle = "Built through learning, practice, and growth.",
}) {
  return (
    <SectionTitle
      className="mt-16 sm:mt-20"
      eyebrow="Learning Path"
      title={title}
      subtitle={subtitle}
      iconSrc="/icons/academy.png"
      iconAlt="Education"
    />
  );
}
