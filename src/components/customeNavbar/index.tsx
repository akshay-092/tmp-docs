import React, { useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import "./Navbar.css";
import ThemeToggle from "./theme-toggle";
import IntegrationDropdownMenu from "./integrationMenuBar";
import PlatformDropdownMenu from "./platformMenuBar";
import SearchBar from '@theme/SearchBar';
type DropdownType = "integrate" | "platform" | null;

function Navbar(): React.ReactNode {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const { colorMode } = useColorMode();

  // Call useBaseUrl outside of any conditional logic
  const lightLogoUrl = useBaseUrl("/imgs/lightlogo.svg");
  const darkLogoUrl = useBaseUrl("/imgs/logo.svg");

  const handleDropdownToggle = (dropdown: DropdownType): void => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = (): void => {
    setActiveDropdown(null);
  };

  return (
    <header className="navbar navbar-container">
      <div className="navbar-content">
        {/* Logo - Theme-aware */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeDropdowns}>
            <img
              src={lightLogoUrl}
              alt="CometChat Docs"
              className="logo-image logo-light"
            />
            <img
              src={darkLogoUrl}
              alt="CometChat Docs"
              className="logo-image logo-dark"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
        <div className="dropdown-container"> {/* Position relative */}
            <button
              className={clsx("dropdown-button", { active: activeDropdown === "integrate" })}
              onClick={() => handleDropdownToggle("integrate")}
              // ... aria attributes ...
            >
              Integrate
              <span className="dropdown-arrow">▼</span>
            </button>
            {/* The Dropdown Content itself */}
            {activeDropdown === "integrate" && (
              <div className="dropdown-content"> {/* Position absolute */}
                <IntegrationDropdownMenu /> {/* The visual menu */}
              </div>
            )}
          </div>

          <div className="dropdown-container"> {/* Position relative */}
            <button
              className={clsx("dropdown-button", { active: activeDropdown === "platform" })}
              onClick={() => handleDropdownToggle("platform")}
               // ... aria attributes ...
           >
              Platform
              <span className="dropdown-arrow">▼</span>
            </button>
             {/* The Dropdown Content itself */}
            {activeDropdown === "platform" && (
              <div className="dropdown-content"> {/* Position absolute */}
                <PlatformDropdownMenu /> {/* The visual menu */}
              </div>
            )}
          </div>
        </nav>

        {/* Search Box */}
        <div className="search-container">
        <SearchBar /> 

        </div>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <Link to="/dashboard" className="dashboard-button">
            Dashboard
          </Link>
          <Link to="/contact" className="contact-button">
            Contact Support
          </Link>

          {/* Theme Toggle Switch */}
          <ThemeToggle />
        </div>
      </div>

      {/* Backdrop for closing dropdowns when clicking outside */}
      {activeDropdown && (
        <div className="dropdown-backdrop" onClick={closeDropdowns} />
      )}
    </header>
  );
}

export default Navbar;
