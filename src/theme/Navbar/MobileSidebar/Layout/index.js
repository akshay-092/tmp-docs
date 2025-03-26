import React, { useState } from "react";
import clsx from "clsx";
import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal";
import { useThemeConfig } from "@docusaurus/theme-common";
import Overview from "@site/src/components/navbar/Overview";
import NavbarItem from "@theme/NavbarItem";
import Implementation from "@site/src/components/navbar/Implementation";
import Extend from "@site/src/components/navbar/Extend";
import Platform from "@site/src/components/navbar/Platform";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}) {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Article"); // ["Overview", "Implementation"]
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const items = useNavbarItems();
  return (
    <div className="navbar-sidebar flex flex-col">
      {header}
      <div
        className={clsx("navbar-sidebar__items !max-h-full", {
          "navbar-sidebar__items--show-secondary": secondaryMenuShown,
        })}
      >
        <div className="drawer max-h-full">
          <input
            id="my-drawer"
            checked={isDrawerOpen}
            type="checkbox"
            onChange={toggleDrawer}
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <div className="navbar-sidebar__item menu">
              {/* PRimary menu */}
              <ul className="menu__list flex flex-col">
                {items.map((item, i) => {
                  if (
                    item.label === "Integrate" ||
                    item.label == "Extend" ||
                    item.label == "Platform"
                  ) {
                    return (
                      <label
                        htmlFor="my-drawer"
                        onClick={() => {
                          setSelectedLabel(item.label);
                        }}
                        key={i}
                        className="cts-rom btn btn-ghost drawer-button w-full justify-between"
                      >
                        <span className="text-lg normal-case text-cst-text-drawer dark:text-cst-text-drawer-dark ">
                          {item.label}
                        </span>
                        {/* <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current text-cst-text-drawer dark:text-cst-text-drawer-dark"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 6l6 6l-6 6"
                          />
                        </svg> */}
                      </label>
                    );
                  } else if (item.label === "APIs" || item.label === "Log in") {
                    return (
                      <a
                        target="_blank"
                        href={item.to}
                        key={i}
                        className="cts-rom btn btn-ghost drawer-button w-full justify-between no-underline"
                      >
                        <span className="text-lg normal-case text-cst-text-drawer dark:text-cst-text-drawer-dark">
                          {item.label}
                        </span>
                      </a>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              "drawer-side  !h-fit !max-h-full overflow-y-scroll"
            )}
          >
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            {/* Sidebar content here */}
            <ul className="menu w-full flex-1 bg-[#191822] py-4 text-base-content">
              <div
                onClick={toggleDrawer}
                className="cst-row mb-2 ml-4 cursor-pointer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path d="M14 23.9917H42" />
                    <path d="M26 36L14 24L26 12" />
                    <path d="M5 36V12" />
                  </g>
                </svg>
                <span className="ml-2 text-xs text-white">Back</span>
              </div>
              {/* Overview */}

              {selectedLabel === "Extend" ? (
                <Extend />
              ) : selectedLabel === "Platform" ? (
                <Platform />
              ) : (
                <Implementation />
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-sidebar__item menu !flex-nowrap">
          {secondaryMenu}
        </div>
      </div>
    </div>
  );
}
