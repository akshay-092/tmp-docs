import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import {
  useSidebarBreadcrumbs,
} from "@docusaurus/theme-common/internal";

export default function DocItemMetadata() {
  function makeBreadcrumbFromUrl(url) {
    const words = url.split("-");
    return words
      .map((w) => {
        if (w == "ui") {
          return "UI";
        }
        if (w.toLowerCase() == 'sdk') {
          return "SDK"
        }
        if(w.toLowerCase()== 'ios'){
          return "iOS"
        }
        if(w.toLowerCase()== 'ai'){
          return "AI"
        }
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(" ");
  }

  const { metadata, frontMatter, assets } = useDoc();
  const bc = useLocation();
  const breadcrumbs = useSidebarBreadcrumbs();
  let pathArray = bc.pathname.split("/") ;
  pathArray = pathArray.slice(2,pathArray.length-1)

  breadcrumbs.map((item)=>{
    pathArray.push(item.label)
  })

for(let i=0;i<pathArray.length;i++){
  pathArray[i]=makeBreadcrumbFromUrl(pathArray[i])
}
pathArray.reverse();

  return (

    <PageMetadata
      title={pathArray.filter(i => { if (i) { return i; } }).join(" | ")}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}
    />
  );
}
