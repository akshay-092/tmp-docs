import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const DATA = [
  {
    title: "Help Center",
    description:
      "Search our comprehensive knowledge base for all your CometChat questions.",
    link: {
      title: "Learn More",
      href: "https://help.cometchat.com",
    },
    icon: "help-center.svg",
  },
  {
    title: "Interactive Demo",
    description: "Experience CometChat in action with our live chat app.",
    link: {
      title: "Learn More",
      href: "https://www.cometchat.com/interactive-demo-signup",
    },
    icon: "lightning-02.svg",
  },
  {
    title: "Product Updates",
    description:
      "Stay ahead of the curve with the latest CometChat features.",
    link: {
      title: "Learn More",
      href: "https://updates.cometchat.com/",
    },
    icon: "product-update.svg",
  },
  {
    title: "Status Page",
    description:
      "Stay informed about any service interruptions",
    link: {
      title: "Learn More",
      href: "https://status.cometchat.com/",
    },
    icon: "status-active-major-1.svg",
  },
];

function Help() {
  return (
    <div className="con--cust pb-24 pt-24 flex flex-col items-center bg-white dark:bg-inherit">
      <div className="flex  max-w-[1440px]  flex-col items-center justify-center text-center">
        <h1 className="dark:text-cst-sec-title-dark h--cust m-0 mb-10 text-left font-satoshi font-semibold" style={{ color:"#14131D",fontSize:"3rem",lineHeight:"106%"}}>
          Additional resources
        </h1>
      </div>
      <div className="mt-4 grid  w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-4">
        {DATA.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Help;

function Card({ title, description, icon, link }) {
  return (
    <div className="w-11/12">
      <img
        src={useBaseUrl(`/imgs/icons/${icon}`)}
        alt={title}
        className="additional-resources-icon mb-2 h-8 object-contain"
      />
      <h4 className="dark:text-cst-sec-title-dark m-0 font-satoshi font-semibold" style={{ color:"#14131D",lineHeight:"112%",fontSize:"1.125rem" }}>
        {title}
      </h4>
      <p className="dark:text-cst-sec-title-dark font--custom--thin m-0 mt-1 leading-6 font-satoshi font-medium" style={{ color:"#14131D", letterSpacing:"0.00563rem",lineHeight:"120%",fontSize:"1.125rem",opacity:"0.74"}}>
        {description}
      </p>
      <a
        target="_blank"
        href={link.href}
        className="mt-2 flex w-fit flex-row items-center justify-center rounded-xl text-[#6851D6] no-underline font-satoshi font-semibold text-18px"
        style={{ lineHeight:"112%"}}
      >
        {link.title}
      </a>
    </div>
  );
}
