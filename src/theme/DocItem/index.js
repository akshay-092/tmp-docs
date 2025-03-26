// import React from "react";
// import { HtmlClassNameProvider } from "@docusaurus/theme-common";
// import { DocProvider } from "@docusaurus/theme-common/internal";
// import DocItemMetadata from "./Metadata";
// import DocItemLayout from "@theme/DocItem/Layout";
// import Footer from "@site/src/components/Footer";

// const CustomBanner = ({ message }) => (
//   <div
//     style={{
//       position: 'sticky', // Sticky positioning
//       top: 'calc(var(--ifm-navbar-height) + var(--ifm-navbar-item-padding-vertical))', // Dynamic height of the navbar
//       zIndex: 1000, // Ensures it appears above content but below navbar
//       backgroundColor: '#ffeeba',
//       color: '#856404',
//       padding: '10px',
//       textAlign: 'center',
//     }}
//   >
//     {message}
//   </div>
// );

// export default function DocItem(props) {
//   const { content } = props;
//   const isBeta = content.metadata.version === "5.0" && !content.metadata.permalink.includes("react/");

//   const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
//   const MDXComponent = props.content;
//   return (
//     <DocProvider content={props.content}>
//       <HtmlClassNameProvider className={docHtmlClassName}>
//         <DocItemMetadata />
//         <div className="cust--con">
//           {isBeta && (
//             <CustomBanner message="This is a beta version. Features and documentation may change." />
//           )}
//           <DocItemLayout>
//             <MDXComponent />
//           </DocItemLayout>
//         </div>
//       </HtmlClassNameProvider>
//       {/* <Footer /> */}
//     </DocProvider>
//   );
// }

import React from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";

const CustomBanner = ({ message }) => (
  <div
    style={{
      position: 'sticky',
      top: 'calc(var(--ifm-navbar-height) + var(--ifm-navbar-item-padding-vertical))',
      zIndex: 1000,
      backgroundColor: '#ffeeba',
      color: '#856404',
      padding: '10px',
      textAlign: 'center',
    }}
  >
    {message}
  </div>
);

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const isBeta = props.content.metadata.version === "5.0" && !props.content.metadata.permalink.includes("react/");

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <div className="cust--con">
          {isBeta && (
            <CustomBanner message="This is a beta version. Features and documentation may change." />
          )}
          <DocItemLayout>
            {props.content.frontMatter.hide_table_of_contents && (
              <div className="docItemContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocItem-Layout-styles-module">
                <article>
                  <props.content />
                </article>
              </div>
            )}
            {!props.content.frontMatter.hide_table_of_contents && (
              <props.content />
            )}
          </DocItemLayout>
        </div>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}