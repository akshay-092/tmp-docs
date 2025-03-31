// src/components/MobileNavbar.tsx

import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import SearchBar from '@theme/SearchBar'; // <-- Keep this
import { FaEllipsisVertical } from 'react-icons/fa6';
// Optional: If you had specific CSS ONLY for the mobile navbar, keep the import
import './mobileNavbar.css'; // Or './Navbar.css'
import MobileMenu from './mobileMenu';
import { IoCloseSharp } from "react-icons/io5";

export default function YourMobileNavbarComponent() {
  const { colorMode } = useColorMode();
  const lightLogoUrl = useBaseUrl("/imgs/lightlogo.svg");
  const darkLogoUrl = useBaseUrl("/imgs/logo.svg");
  const logoUrl = colorMode === 'dark' ? darkLogoUrl : lightLogoUrl;
  const [isDisplayMobileMenu, setIsDisplayMobileMenu] = useState<boolean>(false)

  return (
    <>
      <header className="navbar navbar-container h-16 mobile-navbar-context">
        <div className='flex h-full w-full items-center justify-between px-4'>
          <div className="navbar-logo flex-shrink-0">
            <Link to="/">
              <img
                src={logoUrl}
                alt="CometChat Docs"
                className="logo-image block h-7 w-auto"
              />
            </Link>
          </div>

          {!isDisplayMobileMenu &&
            <div className="flex items-center gap-2 sm:gap-3">


              <SearchBar />

              <div
                className="
              inline-flex items-center justify-center h-9 w-9
              border border-[--ifm-color-emphasis-500]
              bg-[--ifm-hover-overlay] transition-colors
              dark:border-[--ifm-color-emphasis-400] rounded-md
              hover:bg-[--ifm-hover-overlay] transition-colors cursor-pointer
            "
                aria-label="Options"
              >
                <FaEllipsisVertical
                  className="h-5 w-5 text-[--ifm-navbar-link-color]"
                  aria-hidden="true"
                  onClick={() => setIsDisplayMobileMenu(true)}
                />
              </div>

            </div>
          }
          {isDisplayMobileMenu &&
            <IoCloseSharp size={20} onClick={() => setIsDisplayMobileMenu(false)} />
          }
        </div>

      </header>
      {isDisplayMobileMenu &&
        <MobileMenu
          isOpen={isDisplayMobileMenu}
          onClose={() => setIsDisplayMobileMenu(false)}
        />
      }
    </>
  );
}