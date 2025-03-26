import React, { useState } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import {
  useAnnouncementBar,
  useScrollPosition,
} from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import CustomDropdown from "../../../../components/sidebar/CustomDropdown";
import styles from "./styles.module.css";
import SidebarFooter from "@site/src/components/sidebar/SidebarFooter";

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return (
    <>
      <nav
        className={clsx(
          "thin-scrollbar menu flex flex-col justify-between bg-[#F4F4F9]",
          styles.menu,
          showAnnouncementBar && styles.menuWithAnnouncementBar,
          className
        )}
      >
        <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
          <DocSidebarItems items={sidebar} activePath={path} level={1} />
        </ul>
        {/* sidebar bottom */}
      </nav>
      <SidebarFooter />
    </>
  );
}
