// src/components/MobilePlatform.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Still useful if any icons are local files

// --- Import Icons Used in New Data ---
import {
  MdDashboard,
  MdAccountTree,
  MdNotificationsActive,
  MdInsights,
} from 'react-icons/md';
import { FaShapes } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { VscFileCode } from 'react-icons/vsc';
import { FaShield, FaRobot } from "react-icons/fa6";


// --- Interfaces for New Data Structure ---
interface NewCardItemBase {
  name: string;
  description?: string;
  link?: string;
  id: string;
}
interface CardItemWithComponentIcon extends NewCardItemBase {
  icon: React.ComponentType<any>;
}
interface CardItemWithImageUrl extends NewCardItemBase {
  icon: string;
}
function isIconComponent(icon: React.ComponentType<any> | string): icon is React.ComponentType<any> {
  return typeof icon === 'function';
}
type NewCardItem = CardItemWithComponentIcon | CardItemWithImageUrl;
interface NewSectionData {
  title: string;
  items: NewCardItem[];
}

const chatsAndCalling = [
  {
    name: "Overview",
    icon: MdDashboard,
    description: 'Learn the basic of CometChat messaging system.'
  },
  {
    name: "Features",
    icon: FaShapes,
    description: "Enhance in-app messaging with CometChat's extensions."
  },
  {
    name: "Multi-tenancy",
    icon: MdAccountTree,
    description: "Manage multiple accounts efficiently with multi-tenancy."
  },
  {
    name: "Data Migration",
    icon: BiTransfer,
    description: "Seamlessly migrate chats from other provider to CometChat."
  },
  {
    name: "Webhooks",
    icon: VscFileCode,
    description: "Receive real-time CometChat events via HTTP requests."
  }
];

const extendData = [
  {
    name: "Notification",
    icon: MdNotificationsActive,
    description: 'Boost engagment by sending instant user notification.'
  },
  {
    name: "Moderation",
    icon: FaShield,
    description: "Ensure safety with advance content filtering tools."
  },
  {
    name: "AI Chatbots",
    icon: FaRobot,
    description: "Automate conversations using AI-powered chatbot technology."
  },
  {
    name: "Insights",
    icon: MdInsights,
    description: "Generate AI-powered insights for meaningful conversation."
  }
];

const sampleApps = [
  {
    name: "React Chat App",
    icon: "https://img.icons8.com/color/144/react-native.png",
  },
  {
    name: "React Native Chat App",
    icon: "https://img.icons8.com/color/144/react-native.png",
  },
  {
    name: "iOS chat App",
    icon: "https://img.icons8.com/color/144/swift.png",
  },
  {
    name: "Android chat App (JAVA)",
    icon: "https://img.icons8.com/color/144/android-os.png",
  },
  {
    name: "Android chat App (Kotlin)",
    icon: "https://img.icons8.com/color/144/kotlin.png",
  }
];


// --- Reusable Card Component (Defined Inline) with Width/Wrap Fixes ---
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, href }) => {
  const isExternal = href.startsWith('http');

  const cardClasses =
    "flex flex-col h-full p-5 " +
    "bg-white dark:bg-zinc-800 " +
    "border border-transparent " +
    "rounded-xl " +
    "shadow-sm hover:shadow-lg dark:hover:shadow-md " +
    "transition-all duration-200 ease-in-out " +
    "hover:-translate-y-1 " +
    "hover:border-gray-200 dark:hover:border-zinc-700 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-zinc-900 " +
    "overflow-hidden"; // Prevents content from spilling out

  const content = (
    <>
      {/* Icon and Title Row */}
      <div className="flex mb-2">
        <div className="flex-shrink-0 mr-2 h-6 w-6 align-center text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 min-w-0 break-words">
          {title}
        </h3>
      </div>
      {/* Description */}
      {description && description.trim() && (
        <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
          {description}
        </p>
      )}
    </>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
      {content}
    </a>
  ) : (
    <Link to={href} className={cardClasses}>
      {content}
    </Link>
  );
};
// --- End Inline InfoCard ---

const PlatformButton: React.FC<{ icon: React.ReactNode; text: string; href: string }> = ({ icon, text, href }) => {
  return (
    <Link
      to={href}
      className={
        "flex items-center px-4 py-2  shadow-md" + // Layout and padding
        "bg-white dark:bg-zinc-800 " + // Background colors
        "border border-gray-200 dark:border-zinc-700 " + // Border
        "rounded-lg " + // Rounded corners
        "text-sm font-medium text-gray-700 dark:text-gray-200 " + // Text style
        "hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 " + // Hover state
        "transition-colors duration-150 " + // Smooth transition
        "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:focus:ring-offset-zinc-900" // Focus state
      }
    >
      {/* Icon container */}
      <span className="mr-2 h-5 w-5 flex items-center justify-center"> {/* Icon sizing & spacing */}
        {/* The icon prop will now contain the <img> tag */}
        {icon}
      </span>
      {/* Text */}
      <span>{text}</span>
    </Link>
  );
};

// --- Main Exported Component ---
const MobilePlatform: React.FC = () => {

  return (
    <div className="space-y-8 p-4 shadow-md">
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Chats & Calling
        </h2>
        {/* Using grid and gap like before */}
        <div className="grid grid-cols-2 gap-3">
          {chatsAndCalling.map((item) => {
            let renderedIcon: React.ReactNode;
            if (isIconComponent(item.icon)) {
              const IconComponent = item.icon;
              renderedIcon = <IconComponent className="h-full w-full" />;
            } else {
              renderedIcon = (
                <img src={item.icon} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
              );
            }
            const linkHref = item.link ?? '#';

            return <InfoCard
              key={item.id}
              icon={renderedIcon}
              title={item.name}
              description={item.description}
              href={linkHref}
            />
          })}
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-200 dark:border-zinc-700" />

      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Extend
        </h2>
        {/* Using grid and gap like before */}
        <div className="grid grid-cols-2 gap-3">
          {extendData.map((item) => {
            let renderedIcon: React.ReactNode;
            if (isIconComponent(item.icon)) {
              const IconComponent = item.icon;
              renderedIcon = <IconComponent className="h-full w-full" />;
            } else {
              renderedIcon = (
                <img src={item.icon} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
              );
            }
            const linkHref = item.link ?? '#';

            return <InfoCard
              key={item.id}
              icon={renderedIcon}
              title={item.name}
              description={item.description}
              href={linkHref}
            />
          })}
        </div>
      </div>
      <hr className="border-gray-200 dark:border-zinc-700" />
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Sample Apps
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {sampleApps.map((item) => (
            <PlatformButton
              key={`widget-${item.name}`}
              icon={
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-full w-full object-contain"
                />
              }
              text={item.name}
            // href={item.href ?? generateHref('widgets', item.name)}
            />
          ))}
        </div>
        <p className="see-all-apps-link"> {/* Added class */}
          See All Apps
        </p>
      </div>

    </div>

  );
};

export default MobilePlatform;