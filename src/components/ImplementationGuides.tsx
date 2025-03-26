import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

const DATA = [
  {
    title: "How to Add @Mentions to a React Chat App",
    description:
      "Follow along with this step-by-step tutorial to add ‘@’ mentions in a React chat application.",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "Add Push Notifications to Your Vue Chat App",
    description:
      "Build the infrastructure to enable Push Notifications functionality in your Vue web app.",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "Build a simple video chat app for iOS",
    description:
      "In this tutorial, we walk you through the step by step process to build a simple video chat app in minutes!",
    link: "",
    thumbnail: "univers.png",
  },
  {
    title: "How to build an Android chat app in Kotlin",
    description:
      "Add CometChat SDK - Implement user registration - Set up conversations & chat screens - Live chat in action!",
    link: "",
    thumbnail: "univers.png",
  },
];

function ImplementationGuides() {
  return (
    <div className="con--cust  mb-10 flex flex-col items-center bg-cst-bg-secondary py-12 dark:bg-cst-bg-secondary-dark">
      <div className="flex w-full max-w-[1440px] flex-row items-start justify-between md:items-center">
        <div className="flex w-11/12 flex-col items-start">
          <h1 className="h--cust m-0 mb-1 text-cst-sec-title dark:text-cst-sec-title-dark ">
            Implementation Guides
          </h1>
          <p className="p--cust font--custom--thin text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark ">
            Essential guides for optimal implementation
          </p>
        </div>
        {/* view more */}
        <a
          target="_blank"
          className="font--custom--thin flex w-fit flex-col items-start justify-center whitespace-nowrap rounded-xl border border-solid border-cst-border bg-[#14131D05] p-[10px] text-xs text-cst-black dark:border-cst-border-dark dark:text-cst-white"
        >
          View All
        </a>
      </div>
      <div className="mt-3 grid  w-full max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-4">
        {DATA.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ImplementationGuides;

function Card({ title, description, thumbnail, link }) {
  return (
    <div>
      <img
        src={useBaseUrl(`/imgs/${thumbnail}`)}
        alt={title}
        className="mb-2 aspect-video w-full rounded-xl object-cover"
      />
      <h3 className="m-0 mb-2 font-normal">{title}</h3>
      <p className="p--cust font--custom--thin leading-6">{description}</p>
      <a className="flex w-fit flex-row items-center justify-center rounded-xl  text-sm text-[#6851D6]">
        Learn more
      </a>
    </div>
  );
}
