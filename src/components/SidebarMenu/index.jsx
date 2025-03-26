// SIDEBAR TOP MENU
import React from "react";
import { useHistory } from "@docusaurus/router";
import clsx from "clsx";
import VersionDropdown from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import useGlobalData from "@docusaurus/useGlobalData";
import { useSectionMenu } from "../../lib/useSectionMenu";
import SectionsMenuDropdown from "../SectionsDropdown";
import useBaseUrl from '@docusaurus/useBaseUrl';

function getPrettyPath(path) {
  return path.slice(-1) === "/" ? path.slice(0, -1) : path;
}

export default function SidebarMenu() {
  const router = useHistory();
  const data = useSectionMenu();

  const { docId, sections, groups } = data;
  const globalData = useGlobalData();
  const allDocs = globalData["docusaurus-plugin-content-docs"];
  if (!sections && !groups) return null;


  const baseURL= useBaseUrl("a").split('/')[1]
  const handleSectionChange = (selectedSection) => {
    if (selectedSection !== docId) {
      const { pathname, hash } = router.location;
      const selectedSectionDocs = allDocs[selectedSection].versions[0].docs;
      let overviewPages = selectedSectionDocs[0].path.split('/')
      overviewPages[overviewPages.length-1] = 'overview';
      const overviewPage =overviewPages.join('/');
      if (selectedSectionDocs.find((doc) => doc.path === overviewPage)) {
        const path = overviewPage + (hash && hash.length > 0 ? "#" + hash : "");
        router.push(getPrettyPath(path));
      }
    else {
        const path = selectedSectionDocs[0].path;
        router.push(getPrettyPath(path));
      }
    }
  };


  return (
    <div
      className={clsx(
        "sidebar-menu",

        /* "border-0 border-b border-solid border-[#14131D14] lg:bg-[#F4F4F9] dark:border-[#FAFAFF14] dark:lg:bg-[#FAFAFF14]", */
        "border-0 border-b border-solid border-[#14131D14] lg:bg-[#FFFFFF] dark:border-[#FAFAFF14] dark:lg:bg-[#FAFAFF14]",

        "px-5 py-4"
      )}
    >

      {sections? <div className="text-2xl font-bold dark:text-white sidebar-heading">{sections[0].name}</div>:groups?.map((group) => {
        const isDocIdInGroup = group.docs.find((doc) => doc.docId === docId);
        if (!isDocIdInGroup) return null;
        const { name, docs, className } = group;

        return (
          <div tabIndex={0} key={group.name}>
            <div
              className={clsx(
                className,
                "text-2xl font-bold dark:text-white sidebar-heading"
              )}
            >
              {name}
            </div>
            {(docId != "articles" && docId != "chat-widgets" && docId!='extensions') && 
              <div>
                <div className="flex flex-row gap-2">
                  <SectionsMenuDropdown
                    defaultValue={docId}
                    values={docs}
                    onValueChange={handleSectionChange}
                  />
                  <VersionDropdown
                    docsPluginId={docId}
                    dropdownItemsBefore={[]}
                    dropdownItemsAfter={[]}
                  />
                </div>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
}
