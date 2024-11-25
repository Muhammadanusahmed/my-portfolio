"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export default function CardHoverEffectDemo() {
  const featuredWebinars = [
    {
      title: "Website Development - Custom Solutions",
      description:"Elevate your business with a custom-built website. I create unique, professional websites with responsive layouts and modern design elements, ensuring a seamless experience on any screen size while optimizing for user experience.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Website Maintenance & SEO Optimization",
      description:"Keep your website updated and optimized. I handle regular maintenance, performance enhancements, and SEO best practices to ensure your site is always fast, secure, and search-engine-friendly.",
          slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Graphic Designing",
      description:
        "Bring your brand to life with creative graphic design. I design logos, social media graphics, and marketing materials that effectively communicate your message and create a visually engaging experience.",
      slug: "mastering-your-instrument",
      isFeatured: true,
   }, 
  ];
  return (
    <section id="sec5" className="p-12 bg-gray-900">
      <div className="max-w-7xl sm:px-6">
        <div className="text-center">
          <p className="mt-2 leading-8 font-extrabold tracking-tight text-white text-4xl">
            My Services
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/contact`,
            }))}
          />

          <div className="mt-10 text-center">
            <Link
              href="#experience"
              className="px-4 py-2 rounded-full  text-neutral-700 border-2 border-black bg-cyan-950 hover:bg-gray-100 transition duration-200"
            >
              See What Tools I Use
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
