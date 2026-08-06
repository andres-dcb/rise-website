export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your goals, your home, and the way you live. Every successful remodel starts with listening, ensuring the project is designed around your vision before any work begins.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Every detail is thoughtfully planned before construction begins. From selections and scheduling to budgeting and logistics, we create a clear roadmap that keeps the project organized from day one.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Our team brings the plan to life with careful craftsmanship, consistent communication, and attention to every detail. We focus on quality while minimizing disruption to your daily life.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "Before we consider the project complete, we walk through every space together to ensure every detail meets our standards and yours. The goal is not simply finishing the project, but delivering a home you will enjoy for years to come.",
  },
];