// src/components/FrameworkGrid.tsx
import React from 'react';
import FrameworkCard from './framework-card'; // Assuming FrameworkCard is also refactored or accepts classNames

// Define the Framework interface (remains the same)
export interface Framework {
  id: string;
  title: string;
  version: string;
  icon: string;
  link: string;
}

// Define props interface for FrameworkGrid component (remains the same)
export interface FrameworkGridProps {
  title: string;
  description: string;
  frameworks: Framework[];
}

export default function FrameworkGrid({
  title,
  description,
  frameworks
}: FrameworkGridProps): React.ReactElement {
  return (
    // Section container with bottom margin and horizontal padding
    <div className="mb-12 px-4 md:px-8"> {/* Added md:px-8 for larger screens */}
      {/* Section Title - using theme variable for color */}
      <h2 className="font-jakarta mb-3 text-2xl font-bold text-[--ifm-heading-color] lg:text-3xl"> {/* Assuming font-jakarta is configured */}
        {title}
      </h2>
      {/* Section Description - using theme variables for color */}
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[--ifm-font-color-secondary] dark:text-[--ifm-font-color-secondary]">
        {description}
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/*
          - grid-cols-1: Default is 1 column on extra small screens.
          - sm:grid-cols-2: At least 2 columns on small screens and up.
          - lg:grid-cols-3: 3 columns on large screens and up.
          - xl:grid-cols-4: 4 columns on extra-large screens and up.
          - gap-6: Adjust gap as needed.
        */}
        {frameworks.map((framework) => (
          // Pass framework data to FrameworkCard
          // FrameworkCard component itself will need to handle its styling (potentially with Tailwind too)
          <FrameworkCard
            key={framework.id}
            icon={framework.icon}
            title={framework.title}
            version={framework.version}
            link={framework.link}
            // You might pass className here if FrameworkCard accepts it
            // className="h-full"
          />
        ))}
      </div>
    </div>
  );
}