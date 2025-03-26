import React, { useEffect, useRef, useState } from "react";


const UsersnapWidget = () => {
    const widgetContainerRef = useRef(null);
  
    useEffect(() => {
      const onUsersnapLoad = (api) => {
        // mountNode is an element in which the widget should be rendered
        api.init({ mountNode: widgetContainerRef.current });
      };
  
      // Make the onUsersnapLoad function globally available
      window.onUsersnapLoad = onUsersnapLoad;
  
      // Create and append the script
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://widget.usersnap.com/embed/load/46832037-3df8-4326-89ae-09c6e9ecaf46?onload=onUsersnapLoad';
    document.head.appendChild(script);
  
      // Cleanup function to remove the script when the component is unmounted
      return () => {
        document.head.removeChild(script);
      };
    }, []);

    return <div id="widgetContainer" ref={widgetContainerRef} style={{display: "flex", justifyContent: "center"}}></div>;
};

export default UsersnapWidget;
