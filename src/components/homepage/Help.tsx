import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
const helpData = require("../../data/help.json");

export default function HelpSection({ className = "" }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          "mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20",
          className
        )}>
        <h2 className="mb-12 text-center lg:text-3xl">{helpData.title}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {helpData.cards.map((cardItem, index) => (
            <div key={index} className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <img
                src={cardItem.icon}
                alt={cardItem.title}
                width="48"
                height="48"
              />
              <h3 className="my-3">{cardItem.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {cardItem.description}
              </p>
              <Link
                href={cardItem.link}
                className="text-primary dark:text-primary-100">
                {cardItem.linkText} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
