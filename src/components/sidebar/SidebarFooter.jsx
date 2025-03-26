import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

const DATA = [
  {
    title: "GitHub",
    link: "https://www.github.com/cometchat-pro",
    target: "_blank"
  },
  {
    title: "Dashboard",
    link: "https://app.cometchat.com/",
    target: "_blank "
  },
  {
    title: "Help Center",
    link: "https://help.cometchat.com/",
    target: "_blank"
  },
];

function SidebarFooter() {
  return null;
  /*
  return (
    <div className="w-auto p-2 border-0 border-t border-solid border-[#14131D14] bg-[#F4F4F9] dark:border-[#FAFAFF14] dark:bg-[#FAFAFF14]">
      <h3 className="m-0 mb-3 pl-3 text-base">Links</h3>
      <ul className="p-0  text-sm">
        {DATA.map((item, index) => (
          <a class="p-0 m-0 menu__link" href={item.link} target={item.target}>
           <div
            className="flex w-full cursor-pointer flex-row items-center justify-between py-2 pl-3 pr-4 font-semibold"
            key={index}
          >
            <span className="text-[#7E7D85]">{item.title}</span>
            { }
            <img
              src={useBaseUrl(`/imgs/icons/open.svg`)}
              alt="Open Icon"
              className="w-5 object-contain"
            />
          </div>
          </a>
        ))}
      </ul>
    </div>
  );
  */
}

export default SidebarFooter;
