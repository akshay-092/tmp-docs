import React from "react";
import "./Navbar.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { RiUserSettingsLine } from "react-icons/ri";

// Define types for the items in the lists
interface MenuItem {
  icon: string | IconType;
  name: string;
}

// Define props for the DropdownMenu component


const IntegrationDropdownMenu: React.FC = () => {
  const uiKitsList = [
    {
      name: "React",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "React Native",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "ios",
      icon: "https://img.icons8.com/color/144/swift.png",
    },
    {
      name: "Android",
      icon: "https://img.icons8.com/color/144/android-os.png",
    },
    {
      name: "Flutter",
      icon: "https://img.icons8.com/color/144/flutter.png",
    },
  ];

  const sdks = [
    {
      name: "React",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "React Native",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "ios",
      icon: "https://img.icons8.com/color/144/swift.png",
    },
    {
      name: "Android",
      icon: "https://img.icons8.com/color/144/android-os.png",
    },
    {
      name: "Flutter",
      icon: "https://img.icons8.com/color/144/flutter.png",
    },
    {
      name: "Ionic/Capacitor",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-ionic-a-complete-open-source-sdk-for-hybrid-mobile-app-development-logo-color-tal-revivo.png",
    },
  ];

  const widgets = [
    {
      name: "Wordpress /BuddyPress",
      icon: "https://img.icons8.com/color/144/wordpress.png",
    },
    {
      name: "HTML/ Bootstrap/ JQuery",
      icon: "https://img.icons8.com/color/144/html-5--v1.png",
    },
  ];

  const apis = [
    {
      name: "Chat APIs",
      icon: IoChatboxEllipsesOutline

    },
    {
      name: "Managment API",
      icon: RiUserSettingsLine,
    },
  ];

  return (
    <div className="main-menu-container">
      {/* --- Column 1: UI Kits --- */}
      <div className="menu-col-1">
        <span className="menu-heading">Ui Kits</span> {/* Removed inline style */}
        {uiKitsList.map((item, index) => (
          <div className="item-container" key={index}>
            {/* Assuming item.icon is always a string URL for this list */}
            <img
              src={item.icon as string} // Type assertion if needed
              className="item-icon-img" // Added class for potential styling
              alt={item.name}
            />
            {/* Removed inline style and Tailwind class */}
            <span className="item-name">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>

      {/* --- Column 2: SDKs --- */}
      <div className="menu-col-1">
        <span className="menu-heading">SDKs</span> {/* Removed inline style */}
        {sdks.map((item, index) => (
          <div className="item-container" key={index}>
            <img
              src={item.icon as string}
              className="item-icon-img"
              alt={item.name}
            />
            <span className="item-name">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>

      {/* --- Column 3: Widgets & APIs --- */}
      <div className="menu-col-1">
        <div>
          <span className="menu-heading">Widgets</span> {/* Removed inline style */}
          {widgets.map((item, index) => (
            <div className="item-container" key={index}>
              <img
                src={item.icon as string}
                className="item-icon-img"
                alt={item.name}
              />
              <span className="item-name">{item.name}</span>
            </div>
          ))}

          <div className="horizontal-line"></div> {/* Removed inline style */}

          <span className="menu-heading">APIs</span> {/* Removed inline style */}
          {apis.map((item, index) => (
            <div className="item-container" key={index}>
              {/* Render React Icons as components, let CSS handle color */}
              <item.icon className="item-icon-react" /> {/* Added class */}
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationDropdownMenu;
