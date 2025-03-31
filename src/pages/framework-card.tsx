// src/components/framework-card.tsx
import React from 'react';
import Link from '@docusaurus/Link';

// Props interface remains the same
interface FrameworkCardProps {
  icon: string;
  title: string;
  version: string;
  link: string;
  className?: string;
}

export default function FrameworkCard({
  icon,
  title,
  version,
  link,
  className = ''
}: FrameworkCardProps): React.ReactElement {

  const cardLink = link;

  return (
    <Link
      to={cardLink}
      className={`group block h-full text-[--ifm-font-color-base] no-underline hover:text-[--ifm-font-color-base] ${className}`}
    >
      <div
        className={
          // Base card styles
          "flex h-full items-center rounded-lg border border-[--ifm-color-emphasis-200] bg-[--ifm-card-background-color] " +
          // Responsive Padding: Start smaller, increase on larger screens
          "p-2 space-x-1 md:p-3 md:space-x-3 lg:p-4 lg:space-x-4 " +
          // Default: p-2 (8px), space-x-2 (8px)
          // Medium: md:p-3 (12px), md:space-x-3 (12px)
          // Large: lg:p-4 (16px), lg:space-x-4 (16px)
          "shadow-sm transition-all duration-200 ease-out " +
          // Hover styles
          "group-hover:-translate-y-1 group-hover:border-[--ifm-color-emphasis-300] group-hover:shadow-md " +
          // Dark mode styles
          "dark:border-[--ifm-color-emphasis-300] dark:bg-[--ifm-card-background-color] dark:group-hover:border-[--ifm-color-emphasis-400] dark:group-hover:shadow-lg"
        }
      >
        {/* Icon Container */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <img
            src={icon}
            alt={`${title} logo`}
            // Responsive Icon Size
            className="h-6 w-6 object-contain sm:h-7 sm:w-7 lg:h-8 lg:w-8"
            // Default: h-6 w-6 (24px)
            // Small: sm:h-7 sm:w-7 (28px)
            // Large: lg:h-8 lg:w-8 (32px) - Slightly reduced overall
          />
        </div>

        {/* Card Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Title */}
          <span
            className={
              " whitespace-normal truncate font-semibold text-[--ifm-heading-color] text-wrap" +
              // Responsive Title Size
              "text-s md:text-base" // Default: 14px, Medium: 16px
            }
            title={title}
          >
            {title}
          </span>

          {/* Version Badge */}
          {version && (
            <span
              className={
                "mt-0.4 inline-flex w-fit items-center justify-center rounded border-2 " +
                // Responsive Badge Padding
                "px-1 py-0 md:px-1.3 " + // Default: px-1, Medium: md:px-1.5
                // Colors
                "border-[--ifm-color-emphasis-200] bg-[--ifm-color-emphasis-100] text-[--ifm-color-emphasis-700] " +
                "dark:border-[--ifm-color-emphasis-300] dark:bg-[--ifm-color-emphasis-200] dark:text-[--ifm-color-emphasis-600] " +
                // Responsive Badge Text Size
                "text-s font-medium md:text-xs" // Default: 10px, Medium: 12px
              }
            >
              v{version}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}