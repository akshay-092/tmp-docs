import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

// formatLink function remains the same
function formatLink(base, title) {
  return base + title.toLowerCase().replace(" ", "-");
}

// DATA remains the same
const DATA = [
  {
    title: "Chat & Calling",
    items: [
      {
        title: "Overview",
        icon: "message-chat-circle.svg",
        description: "What is CometChat?",
        link: "/fundamentals/overview",
      },
      {
        title: "Features",
        icon: "puzzle.svg",
        description: "Enhance in-app messaging with CometChat Extensions.",
        link: "/fundamentals/features-core",
      },
      {
        title: "Multi-tenancy",
        icon: "dataflow.svg",
        link: "/fundamentals/multi-tenancy-overview",
        description: "Multi-tenancy for better management.",
      },
      {
        title: "Data migration",
        icon: "folder.svg",
        link: "/fundamentals/data-import-and-migration-overview",
        description: "Migrate from your current chat provider to CometChat.",
      },
      {
        title: "Webhooks",
        icon: "terminal.svg",
        link: "/fundamentals/webhooks-overview",
        description:
          "Subscribe to CometChat events and receive them via HTTP Post requests on your server.",
      },
    ],
  },
  {
    title: "Extend",
    items: [
      {
        title: "Notifications",
        icon: "notifications-bell.svg",
        link: "/notifications/overview",
        description:
          "Increase user engagement by sending them updates via notifications.",
      },
      {
        title: "Moderation",
        icon: "moderation.svg",
        link: "/moderation/overview",
        description:
          "Maintain platform integrity with advanced content rule and keyword management.",
      },
      {
        title: "AI Chatbots",
        icon: "bots.svg",
        link: "/ai-chatbots/overview",
        description:
          "Ignite natural and organic conversations using CometChat AI.",
      },
      {
        title: "Insights",
        icon: "insights.svg",
        link: "/insights",
        description:
          "Ignite natural and organic conversations using CometChat AI.",
      },
    ],
  },
  {
    title: "Sample Apps",
    items: [
      {
        title: "React Chat App",
        icon: "react.svg",
        link: "https://github.com/cometchat/cometchat-uikit-react/tree/v6/sample-app",
        description: "",
      },
      {
        title: "React Native Chat App",
        icon: "react.svg",
        link: "https://github.com/cometchat-pro/cometchat-chat-sample-app-react-native",
        description: "",
      },
      {
        title: "iOS Chat App",
        icon: "swift.svg",
        link: "https://github.com/cometchat/cometchat-sample-app-ios/tree/v5",
        description: "",
      },
      {
        title: "Android Chat App (Java)",
        icon: "android1.svg",
        link: "https://github.com/cometchat/cometchat-uikit-android/tree/v5/sample-app-java",
        description: "",
      },
      {
        title: "Android Chat App (Kotlin)",
        icon: "android1.svg",
        link: "https://github.com/cometchat/cometchat-uikit-android/tree/v5/sample-app-kotlin",
        description: "",
      },
    ],
  },
];


function Platform() {
  return (
    // Base background, flex-col default (mobile), lg:flex-row for wider screens
    <div className="flex w-full flex-col bg-[#191822] lg:flex-row">
      {/* Centering container with responsive padding and gap */}
      <div className="m-auto flex w-full max-w-[1400px] flex-col items-start gap-6 p-4 lg:flex-row lg:justify-between lg:gap-8 lg:p-8">

        {/* Container for the first two sections (Overview/Extend) */}
        {/* flex-1 makes it take available space, lg:flex-[2_2_0%] gives it more weight than samples on large screens if needed */}
        <div className="flex w-full flex-col gap-6 lg:flex-1 lg:gap-8">
          <CardOverview {...DATA[0]} />
          <CardOverview {...DATA[1]} />
        </div>

        {/* Samples Section */}
        {/* lg:flex-1 allows it to take space, could use lg:w-[300px] or similar if fixed width is desired */}
        {/* Background changes only on large screens */}
        <div className="w-full lg:flex-1 lg:max-w-[350px] xl:max-w-[400px]"> {/* Constrain max width */}
          <CardSamples {...DATA[2]} />
        </div>
      </div>
    </div>
  );
}

export default Platform;

function CardOverview({ title, items }) {
  return (
    // Responsive padding (less horizontal padding on mobile)
    <div className="flex w-full flex-1 flex-col items-start justify-start py-4 px-0 md:px-2">
      {/* Responsive heading size */}
      <h2 className="mb-4 font-satoshi text-lg text-[#FAFAFF]/[0.54] md:mb-5 md:text-xl lg:text-[22px]">
        {title}
      </h2>
      {/* Responsive gap and flex-wrap for items */}
      <div className="flex w-full flex-wrap gap-4 md:gap-5 lg:gap-6">
        {items.map((item, idx) => (
          // Responsive width calculation for items (adjust % and gap subtraction as needed)
          <Link
            className="card-nav-bar w-full hover:no-underline sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.66rem)] xl:w-[calc(33.33%-0.75rem)]" // Adjusted calc for lg/xl gaps
            href={item.link}
            key={idx}
          >
            {/* Using flex-col to stack icon/title and description */}
            <div className="flex h-full flex-col justify-start rounded-md border border-transparent p-3 transition-colors hover:border-white/10 hover:bg-white/5"> {/* Added padding and hover effect */}
              {/* Icon and Title row */}
              <div className="flex flex-row items-center justify-start">
                <img
                  className="mr-2 h-4 w-4 flex-shrink-0 object-contain" // Added w-4 and flex-shrink-0
                  src={useBaseUrl(`/imgs/icons/${item.icon}`)}
                  alt="" // Alt text can be empty if title is descriptive enough
                />
                {/* Responsive title size & line height */}
                <p className="m-0 font-satoshi text-sm font-medium text-[#FAFAFF]/[0.84] hover:text-cst-text-purple md:text-base leading-tight">
                  {item.title}
                </p>
              </div>

              {/* Description - only show if description exists */}
              {item.description && (
                 <p className="mt-1.5 font-satoshi text-xs font-medium text-[#FAFAFF]/[0.50] md:mt-2 md:text-sm leading-snug">
                   {item.description}
                 </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


function CardSamples({ title, items }) {
  return (
    // Background transparent by default, changes on lg. Responsive padding. Added rounded corners.
    <div className="flex h-full w-full flex-col items-start justify-start rounded-lg bg-transparent p-4 transition-colors lg:bg-[#1E1D27] lg:p-6 xl:p-8">
      {/* Responsive heading size */}
      <h2 className="mb-4 font-satoshi text-lg text-[#FAFAFF]/[0.54] md:mb-5 md:text-xl lg:text-[22px]">
        {title}
      </h2>
      {/* Responsive gap */}
      <div className="flex flex-col items-start gap-3 md:gap-4">
        {items.map((item, item_index) => (
          <Link
            target="_blank"
            rel="noopener noreferrer" // Good practice for target="_blank"
            // Added padding, rounded, hover effect for better interaction
            className="card-nav-bar -ml-2 flex flex-row items-center justify-start rounded-md p-2 text-left text-[#FAFAFF] transition-colors hover:bg-white/10 hover:no-underline"
            href={item.link}
            key={item_index}
          >
            <img
              // Added w-5/w-6, flex-shrink-0. Removed grayscale, add conditionally if needed
              className="mr-2 h-5 w-5 flex-shrink-0 object-contain md:h-6 md:w-6"
              src={useBaseUrl(`/imgs/logos/${item.icon}`)}
              alt={`${item.title} logo`} // Better alt text
            />
            {/* Responsive title size & line height */}
            <p className="m-0 whitespace-nowrap font-satoshi text-sm font-semibold text-[#fafaff]/[0.84] md:text-base leading-tight">
              {item.title}
            </p>
          </Link>
        ))}
        {/* Responsive link size */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 font-satoshi text-sm font-semibold text-[#6851D6] hover:text-[#8A78E8] hover:no-underline md:text-base lg:mt-4"
          href="https://github.com/cometchat"
        >
          See all apps
        </Link>
      </div>
    </div>
  );
}