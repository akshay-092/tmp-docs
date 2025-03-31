// src/components/sample-apps.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
// Removed import styles from './sample-apps.module.css';

// GitHub Icon component - Modified to use currentColor
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    // Removed fill="currentColor" - SVG path will inherit color now
    aria-hidden="true"
    width={props.width || 16}
    height={props.height || 16}
    {...props} // Pass other props like className
  >
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      fill="currentColor" // Set fill to currentColor here
    ></path>
  </svg>
);

const SampleAppsSection = () => {
  const sampleApps = [
    { title: "React Chat App", link: "https://github.com/cometchat/cometchat-chat-sample-app-react" },
    { title: "Android Chat App (Kotlin)", link: "https://github.com/cometchat/cometchat-sample-app-android-kotlin" },
    { title: "React Native Chat App", link: "https://github.com/cometchat-pro/cometchat-chat-sample-app-react-native" },
    { title: "Flutter Chat App", link: "https://github.com/cometchat/cometchat-chat-sample-app-flutter" },
    { title: "iOS Chat App", link: "https://github.com/cometchat/cometchat-chat-sample-app-ios-swift" },
    { title: "Vue Chat App", link: "https://github.com/cometchat/cometchat-chat-sample-app-vue" },
    { title: "Android Chat App (Java)", link: "https://github.com/cometchat/cometchat-chat-sample-app-android-java" },
    { title: "Angular Chat App", link: "https://github.com/cometchat/cometchat-chat-sample-app-angular" }
  ];

  return (
    // Section Container
    <section className="mb-12 w-full px-4 md:px-0"> {/* Horizontal padding from parent in Homepage */}

      {/* Section Header: Responsive layout */}
      <div className="mb-4 flex items-center justify-between gap-4">
     

        {/* Section Title */}
        <h2 className="m-0 text-xl font-medium !text-[--ifm-heading-color] md:text-2xl"> {/* Keep responsive text size */}
          Sample Apps
        </h2>

        {/* View All Button */}
        <Link
          to="https://github.com/cometchat"
          className={
            // Button classes remain the same
            "inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-lg border px-4 py-1.5 text-sm font-medium no-underline transition-colors duration-200 " + // Added flex-shrink-0
            "border-[--ifm-color-emphasis-300] bg-transparent text-[--ifm-font-color-base] hover:bg-[--ifm-hover-overlay] " +
            "dark:border-[--ifm-color-emphasis-400] dark:text-[--ifm-font-color-base] dark:hover:bg-[--ifm-hover-overlay]"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          View All
        </Link>
      </div>

      {/* Section Description */}
      <p className="mb-8 mt-0 text-base leading-relaxed text-[--ifm-font-color-secondary] dark:text-[--ifm-font-color-secondary]">
        Explore practical examples of what you can achieve, and don't forget to check out our Interactive Demo.
      </p>

      {/* Apps Grid: Responsive layout with divider */}
      <div className="mb-10 flex w-full flex-col md:flex-row">
         {/* Column 1 */}
        <div className="flex flex-1 flex-col gap-4 md:pr-6"> {/* Padding right on medium+ */}
          {sampleApps.slice(0, 4).map((app) => (
            <div key={app.title} className="flex items-center justify-between border-b border-dashed border-[--ifm-color-emphasis-200] py-2 dark:border-[--ifm-color-emphasis-300] md:border-none md:py-0"> {/* Bottom border only on mobile */}
              <div className="text-sm font-medium text-[--ifm-font-color-base] dark:text-[--ifm-font-color-secondary]">
                {app.title}
              </div>
              <Link
                to={app.link}
                className={
                  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-3 py-1 text-xs font-medium no-underline transition-colors duration-200 " +
                  "border-[--ifm-color-emphasis-300] bg-transparent text-[--ifm-font-color-base] hover:bg-[--ifm-hover-overlay] " + // Light mode clone button
                  "dark:border-[--ifm-color-emphasis-400] dark:text-[--ifm-font-color-base] dark:hover:bg-[--ifm-hover-overlay]" // Dark mode clone button
                 }
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" /> {/* Apply size directly */}
                Clone
              </Link>
            </div>
          ))}
        </div>
         {/* Divider: Visible only on medium+ screens */}
         <div className="mx-auto my-4 h-px w-full bg-[--ifm-color-emphasis-200] dark:bg-[--ifm-color-emphasis-300] md:mx-0 md:my-0 md:h-auto md:w-px" />
        {/* Column 2 */}
        <div className="flex flex-1 flex-col gap-4 md:pl-6"> {/* Padding left on medium+ */}
          {sampleApps.slice(4, 8).map((app) => (
            <div key={app.title} className="flex items-center justify-between border-b border-dashed border-[--ifm-color-emphasis-200] py-2 dark:border-[--ifm-color-emphasis-300] md:border-none md:py-0"> {/* Bottom border only on mobile */}
              <div className="text-sm font-medium text-[--ifm-font-color-base] dark:text-[--ifm-font-color-secondary]">
                {app.title}
              </div>
              <Link
                to={app.link}
                 className={
                  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-3 py-1 text-xs font-medium no-underline transition-colors duration-200 " +
                  "border-[--ifm-color-emphasis-300] bg-transparent text-[--ifm-font-color-base] hover:bg-[--ifm-hover-overlay] " + // Light mode clone button
                  "dark:border-[--ifm-color-emphasis-400] dark:text-[--ifm-font-color-base] dark:hover:bg-[--ifm-hover-overlay]" // Dark mode clone button
                 }
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" />
                Clone
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Office Hours Section */}
      <div className="mt-12 w-full">
        {/* Office Hours Card: Responsive layout */}
        <div className={
             "relative flex flex-col overflow-hidden rounded-2xl border p-6 shadow-sm md:flex-row md:items-center md:justify-between md:p-8 " + // Base layout + responsive
             "border-[--ifm-color-emphasis-200] bg-[--ifm-color-emphasis-100] " + // Light mode card
             "dark:border-[--ifm-color-emphasis-300] dark:bg-[#1a1a1a]" // Dark mode card
             }>
          {/* Content */}
          <div className="relative z-10 w-full md:w-2/3 lg:w-3/5">
            {/* Title */}
            <h3 className="mb-4 text-xl font-semibold !text-[--ifm-heading-color] md:text-2xl">
              CometChat Solutions Office Hours
            </h3>
            {/* Description */}
            <p className="mb-6 text-base leading-relaxed text-[--ifm-font-color-secondary]">
              Join our solutions office hours to brainstorm and ideate on your use cases, get
              guidance on integration from our solution engineers.
            </p>
            {/* Book Slot Button */}
            <Link
              to="https://www.cometchat.com/office-hours"
              className="inline-flex items-center justify-center rounded-xl bg-[#6852D6] px-5 py-2.5 text-base font-medium text-white no-underline transition-colors duration-200 hover:bg-[#5a45c0] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your slot
            </Link>
          </div>
          {/* Image: Hidden on mobile, shown with varying size/opacity */}
          <img
            src={useBaseUrl("imgs/clock-bg.svg")}
            alt="Office Hours"
            className="absolute bottom-0 right-0 hidden h-auto w-[120px] object-contain opacity-50 md:block md:w-[180px] md:opacity-100 lg:w-[200px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default SampleAppsSection;