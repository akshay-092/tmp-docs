import React from "react";
import WebNavbar from "./webNavbar";
import ResponsiveComponentSwitcher from "./ResponsiveComponentSwitcher";
import MobileNavbar from "./mobileNavbar";
function Navbar(): React.ReactNode {
  return (
    <ResponsiveComponentSwitcher
    MobileComponent={MobileNavbar}
    DesktopComponent={WebNavbar}
    // ssrDefault="desktop" // Optional: Render desktop version during SSR
  />
  );
}

export default Navbar;
