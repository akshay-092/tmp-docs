import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import ThemedImage from "@theme/ThemedImage";

const heroData = require("../../data/hero.json");

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/homepage/hero-light.png" />
        <link rel="prefetch" href="/homepage/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold  lg:text-6xl">
            {heroData.title}
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            {heroData.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <a
              href={heroData.buttons[0].link}
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white">
              {heroData.buttons[0].text}
            </a>
            <Link
              href={heroData.buttons[1].link}
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100">
              {heroData.buttons[1].text}
            </Link>
          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: heroData.image.light,
              dark: heroData.image.dark,
            }}
            alt="Hero Picture"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
