import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const SOCIAL_MEDIA = [

  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/cometchat/",
    icon: "linkedin.svg",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/CometChat",
    icon: "x.svg",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/cometchat",
    icon: "github.svg",
  },
];

function Footer() {
  return (
    <div className="flex flex-row items-start justify-center bg-[#0A0914] py-6 text-[#FAFAFF] text-opacity-[0.74] md:items-center">
      <div className="flex w-11/12 max-w-[1440px] flex-col items-start  justify-between text-sm md:w-full md:flex-row  md:items-center md:px-[48px] xlg:px-0 text-[14px] mx-16">
        {/* links */}
        <div className="m-0 mb-6 flex flex-row space-x-3 whitespace-nowrap md:mb-0">
          <p className="m-0">2024 &copy; CometChat</p>

        </div>
        {/* social media */}
        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          {SOCIAL_MEDIA.map((item) => (
            <a
              target="_blank"
              key={item.title}
              href={item.href}
              className="flex flex-row items-center justify-start space-x-2 text-xs text-[#FAFAFF] text-opacity-[0.74] md:justify-center md:space-x-1"
            >
              <img
                className={`${
                  item.title === "X" ? "h-4" : "h-5"
                } object-contain`}
                src={useBaseUrl(`/imgs/icons/${item.icon}`)}
                alt={item.title}
              />
              <p className="m-0">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
