import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
import { ChevronRight } from "react-feather";
import useRouteContext from "@docusaurus/useRouteContext";

function extractURL(url, item) {
  const my_list = url.split("/");
  // check if item in the list
  if (my_list.includes(item)) {
    // get the first items before the item
    const index = my_list.indexOf(item);
    const new_list = my_list.slice(0, index + 1);
    return new_list.join("/");
  } else {
    return url;
  }
}

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
      if (w.toLowerCase() == 'ai') {
        return 'AI'
      }
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link text-2xs";
  if (isLast) {
    return (
      <span
        className={clsx(className, "text-cst-black dark:text-cst-white")}
        itemProp="name"
      >
        {children}
      </span>
    );
  }

  if (href == '/') {

    const baseURL = '/' + useBaseUrl("/").split('/')[1];
    return (<a className="breadcrumbs__link" itemProp="item" href={ baseURL }>
               <span itemProp="name">{children}</span>
            </a>)
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name" className="breadcrumbs__link">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <div className="flex flex-row items-center">
      <span className={className}>{children}</span>
      {/* <ChevronRight className="mt-1 h-4 w-4 text-cst-secondary-text dark:text-cst-secondary-text-dark md:h-5 md:w-5" /> */}
    </div>
  );
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem",
      })}
      className={clsx("breadcrumbs__item  text-2xs md:text-base", {
        "breadcrumbs__item--active": active,
      })}
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
function HomeBreadcrumbItem() {
  const homeHref = "/" + useBaseUrl("/").split('/')[1];
  return (
    <li className="breadcrumbs__item ">
      <a
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className={clsx(
          "breadcrumbs__link ",
          styles.breadcrumbsItemLink
        )}
        href={homeHref}
      >
        Home
      </a>
    </li>
  );
}
export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const location = useLocation();

  if (!breadcrumbs) {
    return null;
  }
  // const temporaryURL = ["/sdk","/ui-kit","/overview"];
  const temporaryURL = {
    "/sdk": '/',
    "/ui-kit": '/',
    "/articles": "/fundamentals/key-concepts"
  }
  let pathArray = location.pathname.split("/");
  pathArray = pathArray.slice(2, pathArray.length - 1);
  let url = ''
  const versionArray = ["3.0","2.0"];
  let version = '';
  pathArray = pathArray.filter((item)=>{
    if(versionArray.includes(item)){
      version = item;
      return false;
    }
    return true;
  })
  if(version != ''){
    pathArray[pathArray.length-1] = pathArray[pathArray.length-1]+"/"+version;
  }
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer
      )}
      aria-label={translate({
        id: "theme.docs.breadcrumbs.navAriaLabel",
        message: "Breadcrumbs",
        description: "The ARIA label for the breadcrumbs",
      })}
    >
      <ul
        className="breadcrumbs flex flex-row items-center "
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* First one */}
        {homePageRoute && <HomeBreadcrumbItem />}
        {/* middle ones */}
        {

          pathArray.map((item, idx) => {
            url = url + '/' + item;
            if (Object.keys(temporaryURL).includes(url)) {
              return (
                <React.Fragment key={idx}>
                  <ChevronRight size={20} className="text-[#7B7A82]" />
                  <BreadcrumbsItem active={false}>
                    <BreadcrumbsItemLink href={temporaryURL[url]} isLast={false}>
                      {makeBreadcrumbFromUrl(item.split('/')[0])}
                    </BreadcrumbsItemLink>
                  </BreadcrumbsItem>
                </React.Fragment>
              )
            }
            else {
              return (
                <React.Fragment key={idx}>
                  <ChevronRight size={20} className="text-[#7B7A82]" />
                  <BreadcrumbsItem active={false}>
                    <BreadcrumbsItemLink href={url + "/" + "overview"} isLast={false}>
                      {makeBreadcrumbFromUrl(item.split('/')[0])}
                    </BreadcrumbsItemLink>
                  </BreadcrumbsItem>
                </React.Fragment>
              )
            }
          })
        }


        {/* Last one */}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight size={20} className="text-[#7B7A82]" />
              <BreadcrumbsItem
                active={isLast}
                index={idx}
                addMicrodata={!!item.href}
                //active={true}
              >
                <BreadcrumbsItemLink href={item.href} isLast={false}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}
