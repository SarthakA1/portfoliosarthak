import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Awards",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern - Artificial Intelligence",
    location: "Amazon Web Services, Singapore",
    description:
      "Led a team of five student interns to develop a healthcare chatbot enabling patients in Singapore to diagnose symptoms and book appointments based on proximity, advancing personalized medicine. Focused on leveraging AI technologies to enhance healthcare accessibility and streamline patient care. Used Amazon Sagemaker and Amazon Lex among other Amazon Technologies. ",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023 - July 2023",
  },

  {
    title: "Intern - Augmented Reality",
    location: "Awwgment",
    description:
      "Utilized Blippar and the A-Frame programming language to create an interactive platform offering a personalized menu experience based on users' food preferences. Focused on enhancing user engagement through immersive and dynamic web-based visualizations.",
    icon: React.createElement(FaReact),
    date: "June 2023 - July 2023",
  },
  {
    title: "Intern - Data Science and Analytics",
    location: "Chirpn",
    description:
      "Conducted a skill gap analysis for over 600 students and developed an automated system using Google Looker Studio to generate insightful reports based on psychometric and physics assessments. Provided actionable insights that helped educators tailor strategies for improved student outcomes.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - September 2024",
  },
] as const;

export const projectsData = [
  {
    title: "GR8ER",
    description:
      "The open-source learning network for IB MYP students featuring AI-powered tutor-matching and unique feed personalization algorithms.",
    tags: ["Education", "AI", "Data Science"],
    link: 'https://www.gr8er.live/',
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/gr8er-ib.appspot.com/o/Screenshot%202024-12-15%20at%205.24.50%E2%80%AFPM.png?alt=media&token=5ba78ea4-13cf-4bc2-b1a6-b78d45fc870d"
  },
  {
    title: "UNRAVEL!",
    description:
      "The cognitive training app that focuses on skill-transfer to real-world tasks. Helps with attention, memory, spatial-reasoning, etc.",
    tags: ["Gamified Learning", "Cognitive Training", "AI"],
    link: 'https://play.google.com/store/apps/details?id=com.ahuja.unravel',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gr8er-ib.appspot.com/o/Screenshot%202024-12-15%20at%205.25.29%E2%80%AFPM.png?alt=media&token=faced05d-ec08-47dd-b4c9-e55d47cc2a59'
  },
  {
    title: "Hypertensight",
    description:
      "The deep-learning augmented ophthalmic diagnostic tool for the early detection and diagnosis of Hypertensive Retinopathy",
    tags: ["HEALTHCARE", "Personalized Medicine", "AI", "Product Design"],
    link: 'https://hypertensight.streamlit.app/',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gr8er-ib.appspot.com/o/Screenshot%202024-12-15%20at%205.48.09%E2%80%AFPM.png?alt=media&token=83d7c235-f1a5-4ec4-9a96-e06e57a1b36e'
  },
] as const;




export const skillsData = [
  "Top 10% - Breakthrough Junior Challenge",
  "Winner ($300) - Fortis Innovation Challenge",
  "Winner - Innosphere (Sigma Xi High School Research Conference)",
  "MYP Honor Roll for Outstanding Academic Achievement - Highest Number of Perfect 7s (8 Subjects)",
  "Featured in The Times of India",
  "Published in International Journal of Computer Science and Engineering",
  "Pathways Prodigy Award",
] as const;
