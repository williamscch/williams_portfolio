const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Williams Colmenares",
  jobTitle: "Senior Software Engineer",
  url: "https://williamscolmenares.dev",
  email: "williamscolmenaresch@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cúcuta",
    addressCountry: "CO",
  },
  knowsLanguage: ["en", "es"],
  hasSkill: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Payload CMS",
    "AWS S3",
    "Vercel",
    "AI-Assisted Engineering",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Microverse",
  },
  worksFor: {
    "@type": "Organization",
    name: "Apply",
  },
  sameAs: [
    "https://www.linkedin.com/in/williamscolmenaresch",
    "https://github.com/williamscch",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
