// src/theme/Navbar/index.js
import CustomNavbar from '@site/src/components/customeNavbar';
import React from 'react';
// Import your custom Navbar component
// import CustomNavbar from '@site/src/components/CustomNavbar'; // Use @site alias

// This is the component Docusaurus will now render for the navbar
export default function Navbar() {
  // You could add logic here if needed, like fetching data,
  // but for a direct replacement, just render your component.
  return <CustomNavbar/>;
}