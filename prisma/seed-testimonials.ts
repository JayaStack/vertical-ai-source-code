import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const testimonials = [
  {
    id: uuidv4(),
    content: "We truly appreciate the team's ownership and execution. Their AI sales assistant helped us automate lead engagement, ensure consistent follow-ups, and improve conversion efficiency. The ability to handle high-volume enquiries instantly has improved our lead-to-booking ratio by nearly 25%-it's like having an army of perfectly trained sales agents working 24/7.",
    companyName: "DRA Homes",
    rating: 5,
    logoUrl: "/assets/client-logos/DRA-Homes.png",
    status: "published",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    content: "Before this, we were missing leads due to slow follow-ups. With AI voice agents, every enquiry is now handled instantly, test drives are scheduled seamlessly, and service calls are proactive. This has improved conversions and ensured no opportunity is lost.",
    companyName: "SMK MG",
    rating: 4,
    logoUrl: "/assets/client-logos/smk-mg.png",
    status: "published",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    content: "Their AI voice agents for collections helped us significantly improve recovery rates and scaled the collection. Conversations are structured, empathetic, and fully compliant, ensuring a smooth and effective recovery process across our entire national portfolio.",
    companyName: "Kotak Mahindra Bank",
    rating: 5,
    logoUrl: "/assets/client-logos/Kotak-Mahindra.png",
    status: "published",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    content: "We saw a noticeable increase in on-time payments after partnering with them. Their AI voice agents handled follow-ups professionally and at scale, improving recovery efficiency while strengthening customer relationships. Implementation was smooth, and the ROI was evident within the first quarter.",
    companyName: "Bajaj Finserv",
    rating: 5,
    logoUrl: "/assets/client-logos/Bajaj-Finserv.png",
    status: "published",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    content: "What we liked most was the balance between persistence and customer sensitivity. The orchestration layer has significantly reduced our manual data entry errors and bridges the gap between our legacy systems and modern AI capability, truly wonderful service and support.",
    companyName: "TVS Credits",
    rating: 4,
    logoUrl: "/assets/client-logos/TVS-Credit.png",
    status: "published",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function main() {
  console.log("Seeding testimonials...");
  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial });
    console.log(`✔ Seeded: ${testimonial.companyName}`);
  }
  console.log(`\nDone! Seeded ${testimonials.length} testimonials.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
