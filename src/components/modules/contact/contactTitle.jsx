"use client";

import SectionTitle from "../ui/SectionTitle";

export default function ContactTitle({
  title = "Contact",
  subtitle = "Let's talk about ideas, collabs, or your next build.",
}) {
  return (
    <SectionTitle
      className="mt-16 sm:mt-20"
      eyebrow="Let's Connect"
      title={title}
      subtitle={subtitle}
      iconSrc="/icons/gmail.png"
      iconAlt="Contact"
    />
  );
}
