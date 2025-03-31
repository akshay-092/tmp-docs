import React, { useState } from 'react'; // Removed useState as it's no longer needed for accordion
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { FiX } from 'react-icons/fi'; // Close icon
import { IoChevronForward, IoChevronDownOutline} from 'react-icons/io5'; // Chevron, Sun, Moon icons (Chevron still used for illustration)
// Removed clsx import as it's not needed for the simple nav list anymore
import ThemeToggle from './theme-toggle'; // Assuming this handles its own styles/imports
import MobileIntegrate from './mobileIntergrate';
import MobilePlatform from './mobilePlatform';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    // Removed openSection state and handleSectionToggle function
    // const [openSection, setOpenSection] = useState<OpenSectionType>(null);
    const { colorMode, setColorMode } = useColorMode(); // Keep if ThemeToggle needs it externally
    const [isDisplayIntegration, setDisplayIntegration] = useState(false)
    const [isDisplayPlatform, setDisplayPlatform] = useState(false)


    if (!isOpen) {
        return null;
    }

    // Function to close the menu when a navigational link is clicked
    // This will be used by Integrate, Platform, Dashboard, Contact links
    const handleLinkClick = () => {
        onClose();
        // Add any other logic needed on link click, like ensuring navigation occurs
    };

    return (
        // Overlay container
        <div
            className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-zinc-900"
            role="dialog"
            aria-modal="true"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-700">
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    cometchat docs
                </span>
                <button
                    onClick={onClose}
                    className="p-1 text-gray-500 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-label="Close menu"
                >
                    <FiX size={24} />
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-grow p-4 overflow-y-auto">

                {/* --- START: Reverted Navigation Section --- */}
                {/* Reverted to the original simple list */}
                <nav className="mb-6">
                    <dl>
                        <dt>
                            {/* Simple Link */}
                            <Link
                                onClick={() => {
                                    setDisplayIntegration(!isDisplayIntegration)
                                    setDisplayPlatform(false)
                                }} // Close menu on click
                                className="flex items-center justify-between py-3 text-gray-700 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 px-2"
                            >
                                <span>Integrate</span>
                                {/* Chevron is purely visual, doesn't indicate expansion now */}
                               {isDisplayIntegration? <IoChevronDownOutline className="text-gray-400" /> :<IoChevronForward className="text-gray-400" />}
                            </Link>
                        </dt>

                        {isDisplayIntegration &&
                            <MobileIntegrate />
                        }

                        <dt>
                            {/* Simple Link */}
                            <Link
                                onClick={() => {
                                    setDisplayPlatform(!isDisplayPlatform)
                                    setDisplayIntegration(false)
                                }} // Close menu on click
                                className="flex items-center justify-between py-3 text-gray-700 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 px-2"
                            >
                                <span>Platform</span>
                                {/* Chevron is purely visual, doesn't indicate expansion now */}
                                {isDisplayIntegration? <IoChevronDownOutline className="text-gray-400" /> :<IoChevronForward className="text-gray-400" />}
                                </Link>
                        </dt>
                        {isDisplayPlatform &&
                            <MobilePlatform />
                        }

                    </dl>
                </nav>
                {/* --- END: Reverted Navigation Section --- */}


                {/* Action Buttons */}
                <div className="flex items-center gap-3 mb-6">
                    {/* Dashboard Button */}
                    <Link
                        to="/dashboard" // Adjust path as needed
                        onClick={handleLinkClick} // Close menu on click
                        className="flex-1 px-4 py-2 text-sm font-medium text-center text-black bg-white border border-gray-300 rounded-md dark:border-zinc-600 dark:bg-zinc-900 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Dashboard
                    </Link>

                    {/* Contact Support Button */}
                    <Link
                        to="/contact" // Adjust path as needed
                        onClick={handleLinkClick} // Close menu on click
                        className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-black border border-transparent rounded-md dark:bg-white dark:text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                    >
                        Contact Support
                    </Link>
                </div>

                {/* Spacer to push theme toggle to bottom */}
                <div className="flex-grow"></div>

                {/* Theme Toggle Section */}
                {/* Assuming ThemeToggle component handles its own functionality */}
                <div className="pt-4 mt-auto border-t border-gray-200 dark:border-zinc-700">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;