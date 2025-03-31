// src/components/MobileIntegrate.tsx
import React from 'react';
import Link from '@docusaurus/Link'; // Make sure Link is imported

// Define the structure for the NEW button data
interface NewPlatformData {
  name: string;
  icon: string; // Icon is now a URL string
  // Add href here or generate it dynamically
  href?: string; // Make href optional for now, we'll add it
}

// --- Your NEW Data Arrays ---
const uiKitsList: NewPlatformData[] = [
  { name: "React", icon: "https://img.icons8.com/color/144/react-native.png" },
  { name: "React Native", icon: "https://img.icons8.com/color/144/react-native.png" },
  { name: "ios", icon: "https://img.icons8.com/color/144/swift.png" },
  { name: "Android", icon: "https://img.icons8.com/color/144/android-os.png" },
  { name: "Flutter", icon: "https://img.icons8.com/color/144/flutter.png" },
];

const sdks: NewPlatformData[] = [
  { name: "React", icon: "https://img.icons8.com/color/144/react-native.png" },
  { name: "React Native", icon: "https://img.icons8.com/color/144/react-native.png" },
  { name: "ios", icon: "https://img.icons8.com/color/144/swift.png" },
  { name: "Android", icon: "https://img.icons8.com/color/144/android-os.png" },
  { name: "Flutter", icon: "https://img.icons8.com/color/144/flutter.png" },
  { name: "Ionic/Capacitor", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-ionic-a-complete-open-source-sdk-for-hybrid-mobile-app-development-logo-color-tal-revivo.png" },
];

const widgets: NewPlatformData[] = [
  { name: "Wordpress /BuddyPress", icon: "https://img.icons8.com/color/144/wordpress.png" },
  { name: "HTML/ Bootstrap/ JQuery", icon: "https://img.icons8.com/color/144/html-5--v1.png" },
];
// --- End Data ---


// --- Reusable PlatformButton Component (Inline) ---
// Added explicit types for props
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

// --- Main Component ---
const MobileIntegrate: React.FC = () => {
  // Helper function to generate placeholder hrefs
  const generateHref = (basePath: string, name: string): string => {
    // Simple slugification: lowercase, replace spaces/slashes with hyphens
    const slug = name.toLowerCase().replace(/[\s/]+/g, '-');
    return `/docs/${basePath}/${slug}`; // Adjust base path structure as needed
  };

  return (
    // Using space-y-8 for vertical spacing between sections like before
    <div className="space-y-8 p-4 shadow-md"> {/* Added padding to the container */}

      {/* UI Kits Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          UI Kits
        </h2>
        {/* Using grid and gap like before */}
        <div className="grid grid-cols-2 gap-3">
          {uiKitsList.map((item) => (
            <PlatformButton
              // Use name for key, assuming names are unique within this list
              key={`ui-kit-${item.name}`}
              // Render an img tag for the icon using the URL
              icon={
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-full w-full object-contain" // Fill container, maintain aspect ratio
                />
              }
              text={item.name}
              // Generate a placeholder href
              href={item.href ?? generateHref('ui-kits', item.name)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-zinc-700" />

      {/* SDKs Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          SDKs
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {sdks.map((item) => (
            <PlatformButton
              key={`sdk-${item.name}`}
              icon={
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-full w-full object-contain"
                />
              }
              text={item.name}
              href={item.href ?? generateHref('sdks', item.name)}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-zinc-700" />

      {/* Widgets Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Widgets
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {widgets.map((item) => (
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
              href={item.href ?? generateHref('widgets', item.name)}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default MobileIntegrate;