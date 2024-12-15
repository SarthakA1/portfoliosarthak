"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      

  
      <p className="mb-3">
  I’m driven by the love of solving problems through{" "}
  <span className="font-medium">coding and innovation.</span> Technology, for me, is more than a tool—it’s a means to create impactful solutions that address real-world challenges.  
  My passion lies in harnessing technological solutions powered by{" "}
  <span className="font-medium">artificial intelligence (AI)</span> to drive grassroots community impact by increasing access to essential services in{" "}
  <span className="font-medium">education and healthcare</span>. I believe in a{" "}
  <span className="italic">"one size fits one" approach</span>, advocating for{" "}
  <span className="underline">personalized education</span> and{" "}
  <span className="underline">personalized medicine</span> to meet individual needs effectively.  
  I’m fascinated by how AI mirrors aspects of human cognition, enabling machines to learn, reason, and adapt—transforming ideas into intelligent, adaptive solutions. Every line of code I write is guided by the vision of making essential services more{" "}
  <span className="font-medium">accessible, equitable, and tailored</span>—creating personalized impact at scale.
</p>



     
      <div className="mt-8">
        <iframe
          width="750"
          height="400"
          src="https://www.youtube.com/embed/o2_pmjnxtXo"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.section>
  );
}
