import React from "react";
import "./Navbar.css";
import { IconType } from "react-icons/lib";
import { MdDashboard ,MdAccountTree,MdNotificationsActive,MdInsights} from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { VscFileCode } from "react-icons/vsc";
import { FaShield,FaRobot } from "react-icons/fa6";

// Define types for the items in the lists
interface MenuItem {
  icon: string | IconType;
  name: string;
}

// Define props for the DropdownMenu component


const PlatformDropdownMenu: React.FC = () => {
  
  const chatsAndCalling = [
    {
      name: "Overview",
      icon: MdDashboard,
      description:'Learn the basic of CometChat messaging system.'
    },
    {
      name: "Features",
      icon: FaShapes,
      description:"Enhance in-app messaging with CometChat's extensions."
    },
    {
      name: "Multi-tenancy",
      icon: MdAccountTree,
      description:"Manage multiple accounts efficiently with multi-tenancy."
    },
    {
      name: "Data Migration",
      icon: BiTransfer,
      description:"Seamlessly migrate chats from other provider to CometChat."
    },
    {
      name: "Webhooks",
      icon: VscFileCode,
      description:"Receive real-time CometChat events via HTTP requests."
    }
  ];

  const extendData = [
    {
      name: "Notification",
      icon: MdNotificationsActive,
      description:'Boost engagment by sending instant user notification.'
    },
    {
      name: "Moderation",
      icon: FaShield,
      description:"Ensure safety with advance content filtering tools."
    },
    {
      name: "AI Chatbots",
      icon: FaRobot,
      description:"Automate conversations using AI-powered chatbot technology."
    },
    {
      name: "Insights",
      icon: MdInsights,
      description:"Generate AI-powered insights for meaningful conversation."
    }
  ];

  const sampleApps = [
    {
      name: "React Chat App",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "React Native Chat App",
      icon: "https://img.icons8.com/color/144/react-native.png",
    },
    {
      name: "iOS chat App",
      icon: "https://img.icons8.com/color/144/swift.png",
    },
    {
      name: "Android chat App (JAVA)",
      icon: "https://img.icons8.com/color/144/android-os.png",
    },
    {
      name: "Android chat App (Kotlin)",
      icon: "https://img.icons8.com/color/144/kotlin.png",
    }
  ];

  return (
    <div className="main-menu-container">
      {/* --- Column 1: Chats & Calling --- */}
      <div className="menu-col-1">
        <span className="menu-heading">Chats & Calling</span> {/* Removed inline style */}
        {chatsAndCalling.map((item, index) => (
          <div className="item-container-platform" key={item.name}> {/* Use unique key */}
            <div className="item-container-platform-sub">
              {/* Render React Icons, let CSS handle color */}
              <item.icon className="item-icon-react" /> {/* Added class */}
              <span className="item-name">{item.name}</span>
            </div>
            <div className="item-container-desc">
              <span className="item-description">{item.description}</span> {/* Added class */}
            </div>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>

      {/* --- Column 2: Extend --- */}
      <div className="menu-col-1">
        <span className="menu-heading">Extend</span> {/* Removed inline style */}
        {extendData.map((item, index) => (
          <div className="item-container-platform" key={item.name}>
            <div className="item-container-platform-sub">
              <item.icon className="item-icon-react" /> {/* Added class */}
              <span className="item-name">{item.name}</span>
            </div>
            <div className="item-container-desc">
              <span className="item-description">{item.description}</span> {/* Added class */}
            </div>
          </div>
        ))}
      </div>
      <div className="vertical-line"></div>

      {/* --- Column 3: Sample Apps (SDKs) --- */}
      <div className="menu-col-1">
        <span className="menu-heading">Sample Apps</span> {/* Renamed for clarity? Removed inline style */}
        {sampleApps.map((item, index) => (
          <div className="item-container" key={index}>
             {/* Assuming item.icon is always a string URL for this list */}
            <img
              src={item.icon as string}
              className="item-icon-img" // Added class
              alt={item.name}
            />
            <span className="item-name">{item.name}</span>
          </div>
        ))}
        <p className="see-all-apps-link"> {/* Added class */}
          See All Apps
        </p>
      </div>
    </div>
  );
};

export default PlatformDropdownMenu;
