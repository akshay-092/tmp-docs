// src/components/widgets.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'; // Keep if needed for links
// Removed import styles from './widgets.module.css';

// Interface definitions remain the same
export interface Widget {
  id: string;
  title: string;
  icon: string;
  link: string;
}

interface WidgetCardProps {
  widget: Widget;
}

// --- WidgetCard Component (using Tailwind) ---
export const WidgetCard: React.FC<WidgetCardProps> = ({ widget }) => {
  const widgetLink = widget.link; // Assuming link is already correct path

  return (
    // Link acts as the card container
    <Link
      to={widgetLink}
      className={
        "group flex flex-1 items-center space-x-4 rounded-lg border border-[--ifm-color-emphasis-200] bg-[--ifm-card-background-color] p-4 " + // Layout, spacing, border, bg, padding
        "shadow-sm transition-all duration-200 ease-out " + // Shadow & transition
        "hover:-translate-y-1 hover:shadow-md hover:border-[--ifm-color-emphasis-300] " + // Hover effects (no group needed as Link is the card)
        "dark:border-[--ifm-color-emphasis-300] dark:bg-[--ifm-card-background-color] dark:hover:border-[--ifm-color-emphasis-400] dark:hover:shadow-lg " + // Dark mode styles
        "text-[--ifm-font-color-base] no-underline hover:text-[--ifm-font-color-base]" // Text styling
      }
    >
      {/* Widget Icon */}
      <img
        src={widget.icon}
        alt={widget.title}
        // Responsive Icon Size
        className="h-8 w-8 flex-shrink-0 object-contain md:h-9 md:w-9"
         // Default: h-8 w-8 (32px)
         // Medium: md:h-9 md:w-9 (36px)
       />
      {/* Widget Title */}
      <span
        className={
          "truncate font-semibold text-[--ifm-heading-color] " +
          // Responsive Title Size
          "text-base md:text-lg" // Default: 16px, Medium: 18px
        }
      >
        {widget.title}
      </span>
    </Link>
  );
};

// --- WidgetsGrid Component (using Tailwind) ---
interface WidgetsGridProps {
  title: string;
  description: string;
  widgets: Widget[];
}

const WidgetsGrid: React.FC<WidgetsGridProps> = ({ title, description, widgets }) => {
  return (
    // Section Container
    <section className="mb-12 px-4 md:px-0"> {/* Bottom margin, use parent padding on mobile */}

      {/* Section Title */}
      <h2 className="font-jakarta mb-3 text-2xl font-bold !text-[--ifm-heading-color] lg:text-3xl"> {/* Match FrameworkGrid title style */}
        {title}
      </h2>

      {/* Section Description */}
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[--ifm-font-color-secondary] dark:text-[--ifm-font-color-secondary]">
        {description}
      </p>

      {/* Widgets Container: Responsive Flex Layout */}
      <div className="flex w-full flex-col gap-6 md:flex-row">
        {/*
          - flex: Establish flex container.
          - w-full: Take full width.
          - flex-col: Default to column layout (mobile).
          - gap-6: Spacing between cards.
          - md:flex-row: Switch to row layout on medium screens and up.
        */}
        {widgets.map((widget) => (
          <WidgetCard key={widget.id} widget={widget} />
        ))}
      </div>
    </section>
  );
};

export default WidgetsGrid;