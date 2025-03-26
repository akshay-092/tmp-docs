import React from "react";
import Link from "@docusaurus/Link";
import { ArrowUpRight } from "react-feather";
import Head from "@docusaurus/Head";
import ThemedImage from "@theme/ThemedImage";
const apiRefData = require("../../data/api-reference.json");

export default function APIReferenceSection() {
  return (
    <section className="relative mb-10 px-6">
      <Head>
        <link rel="prefetch" href={apiRefData.whiteImg} />
        <link rel="prefetch" href={apiRefData.blackImg} />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-16 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href={apiRefData.link}
          aria-label="API Reference"
          target="_blank"
          className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent">
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">{apiRefData.title}</h2>
          <p className="text-zinc-400">{apiRefData.description}</p>
          <Link
            href={apiRefData.link}
            className="font-medium text-primary-100 dark:text-primary">
            {apiRefData.linkText} &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            {apiRefData.list.map((liteItem, index) => (
              <li key={index} className="flex flex-col gap-1">
                <Link
                  href={liteItem.link}
                  className="group font-jakarta font-semibold text-current">
                  {liteItem.title}
                  <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                    &rarr;
                  </span>
                </Link>
                <div className="text-zinc-400">{liteItem.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: apiRefData.whiteImg,
              dark: apiRefData.blackImg,
            }}
            alt={apiRefData.alt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
