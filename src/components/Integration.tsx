import React from 'react'
import { CardItem } from './Hero';

const DATA = [
  {
    title: "UI Kits",
    subHeading: "Pre-built UI & business logic ",
    description:
      "Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface.",
    items: [
      {
        title: "React",
        link: "/ui-kit/react/v6/overview",
        icon: "react.svg"
      },
      {
        title: "React Native",
        link: "/ui-kit/react-native/overview",
        icon: "react.svg"
      },
      {
        title: "iOS",
        link: "/ui-kit/ios/v5/overview",
        icon: "swift.svg"
      },
      {
        title: "Android",
        link: "/ui-kit/android/v5/overview",
        icon: "android.svg"
      },
      {
        title: "Flutter",
        link: "/ui-kit/flutter/overview",
        icon: "flutter.svg"
      },
      {
        title: "Angular",
        link: "/ui-kit/angular/overview",
        icon: "angular.svg"
      },
      {
        title: "Vue",
        link: "/ui-kit/vue/overview",
        icon: "vue.svg"
      }
    ]
  },
  {
    title: "SDKs",
    subHeading: "Build bespoke chat experiences",
    description:
      "Use Our SDKs to tap into the full potential of CometChat while building your own user interface.",
    items: [
      {
        title: "JavaScript",
        link: "/sdk/javascript/overview",
        icon: "javascript.svg"
      },
      {
        title: "React Native",
        link: "/sdk/react-native/overview",
        icon: "react.svg"
      },
      {
        title: "iOS",
        link: "/sdk/ios/overview",
        icon: "swift.svg"
      },
      {
        title: "Android",
        link: "/sdk/android/overview",
        icon: "android.svg"
      },
      {
        title: "Flutter",
        link: "/sdk/flutter/overview",
        icon: "flutter.svg"
      },
      {
        title: "Ionic",
        link: "/sdk/ionic/overview",
        icon: "ionic.svg"
      },

    ],
  },
  {
    title: "Widgets",
    subHeading: "For simpler websites",
    description: "Integrate chat into any simple HTML, Bootstrap, or jQuery site effortlessly with our copy-and-paste code.",
    items: [
      {
        title: "Wordpress / BuddyPress",
        link: "/widget/wordpress-buddypress",
        icon: "wp.svg"
      },
      {
        title: "HTML / Bootstrap / jQuery",
        link: "/widget/html-bootstrap-jquery",
        icon: "html.svg"
      },
    ]
  },

  /*{
    title: "SDKs Call",
    description:
      "For developers looking to develop voice and video calling functionalities from scratch",
    icons: [{ icon: "call.svg" }, { icon: "video.svg" }],
    items: [
      {
        title: "React",
        link: "/react-chat-call",
      },
      {
        title: "React Native",
        link: "/react-native-chat-call",
      },
      {
        title: "Android",
        link: "/android-chat-call",
      },
      {
        title: "iOS Swift",
        link: "/ios-chat-call",
      },
      {
        title: "Ionic",
        link: "/ionic-chat-call",
      },
      {
        title: "Flutter",
        link: "/flutter-chat-call",
      },<Head>
        <link rel="prefetch" href="/css/elements.min.css" />
      </Head>
    ],
  },*/
];

export default function Integration() {
  return (
    <div className=" mb-6 mt-16 px-6 md:px-16 flex w-full items-center justify-center flex-col ">

      <div className="flex w-full  max-w-[1440px] items-start">

        <div className=" w-full  max-w-[1440px] " >
          {
            DATA.map((item, index) => {
              return <div key={index}>
                <div className="mb-16">
                  <div className="mb-2 md:mb-4">
                    <h1 className="mb-2 bg-to a font-satoshi font-semibold text-[#6852D6]" style={{ fontSize: "2rem", lineHeight: "106%" }}>{item.title}</h1>
                    <h3 className=' mb-3 dark:text-cst-sec-title-dark font-satoshi font-semibold' style={{ color: "#14131D", fontSize: "1.625rem", lineHeight: "106%" }} >{item.subHeading}</h3>
                    <p className='dark:text-cst-sec-title-dark font-satoshi font-medium' style={{ color: "#14131D", fontSize: "1.375rem", lineHeight: "120%", opacity: "0.74" }}>{item.description}</p>
                  </div >

                  <div className="grid w-12/12 max-w-[1440px] mb-3  grid-cols-1 md:grid-cols-2 gap-3 md:w-12/12 lg:grid-cols-4 md:mb-7 md:gap-7 ">
                    {item["items"].map((item) => (
                      <CardItem key={item.title} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            })
          }
        </div>

      </div>
    </div>
  )
}


// import React from 'react';
// import useBaseUrl from "@docusaurus/useBaseUrl";
// import FrameworkGrid from '../components/framework-card/framework-grid';
// import WidgetsGrid from '../components/widget-card/widgets';

// const Integration = () => {
//   // Helper function to get the correct icon path
//   const getIconPath = (iconName) => useBaseUrl(`/imgs/logos/${iconName}`);

//   // UI Kits data
//   const uiKits = [
//     {
//       id: 'react',
//       title: 'React',
//       version: '3',
//       icon: getIconPath('react.svg'),
//       link: '/ui-kit/react/v6/overview'
//     },
//     {
//       id: 'react-native',
//       title: 'React Native',
//       version: '4',
//       icon: getIconPath('react.svg'),
//       link: '/ui-kit/react-native/overview'
//     },
//     {
//       id: 'angular',
//       title: 'Angular',
//       version: '5',
//       icon: getIconPath('angular.svg'),
//       link: '/ui-kit/angular/overview'
//     },
//     {
//       id: 'ios',
//       title: 'iOS',
//       version: '5',
//       icon: getIconPath('swift.svg'),
//       link: '/ui-kit/ios/v5/overview'
//     },
//     {
//       id: 'android',
//       title: 'Android',
//       version: '5',
//       icon: getIconPath('android.svg'),
//       link: '/ui-kit/android/v5/overview'
//     },
//     {
//       id: 'flutter',
//       title: 'Flutter',
//       version: '1',
//       icon: getIconPath('flutter.svg'),
//       link: '/ui-kit/flutter/overview'
//     },
//     {
//       id: 'vue',
//       title: 'Vue',
//       version: '2',
//       icon: getIconPath('vue.svg'),
//       link: '/ui-kit/vue/overview'
//     }
//   ];

//   // SDKs data
//   const sdks = [
//     {
//       id: 'javascript',
//       title: 'JavaScript',
//       version: '4',
//       icon: getIconPath('javascript.svg'),
//       link: '/sdk/javascript/overview'
//     },
//     {
//       id: 'react-native-sdk',
//       title: 'React Native',
//       version: '4',
//       icon: getIconPath('react.svg'),
//       link: '/sdk/react-native/overview'
//     },
//     {
//       id: 'android-sdk',
//       title: 'Android',
//       version: '5',
//       icon: getIconPath('android.svg'),
//       link: '/sdk/android/overview'
//     },
//     {
//       id: 'ios-sdk',
//       title: 'iOS',
//       version: '4',
//       icon: getIconPath('swift.svg'),
//       link: '/sdk/ios/overview'
//     },
//     {
//       id: 'flutter-sdk',
//       title: 'Flutter',
//       version: '1',
//       icon: getIconPath('flutter.svg'),
//       link: '/sdk/flutter/overview'
//     },
//     {
//       id: 'ionic-sdk',
//       title: 'Ionic',
//       version: '1',
//       icon: getIconPath('ionic.svg'),
//       link: '/sdk/ionic/overview'
//     }
//   ];

//   // Widget data
//   const widgets = [
//     {
//       id: 'wordpress',
//       title: 'Wordpress / BuddyPress',
//       icon: getIconPath('wp.svg'),
//       link: '/widget/wordpress-buddypress'
//     },
//     {
//       id: 'html',
//       title: 'HTML / Bootstrap / jQuery',
//       icon: getIconPath('html.svg'),
//       link: '/widget/html-bootstrap-jquery'
//     }
//   ];

//   return (
//     <div className="mb-6 mt-16 px-6 md:px-16 flex w-full items-center justify-center flex-col">
//       <div className="flex w-full max-w-[1440px] items-start flex-col">
//         {/* UI Kits Section */}
//         <FrameworkGrid
//           title="UI Kits"
//           description="Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface."
//           frameworks={uiKits}
//         />

//         {/* SDKs Section */}
//         <FrameworkGrid
//           title="SDKs"
//           description="Use Our SDKs to tap into the full potential of CometChat while building your own user interface."
//           frameworks={sdks}
//         />

//         {/* Widgets Section */}
//         <WidgetsGrid
//           title="Widgets"
//           description="Integrate chat into any simple HTML, Bootstrap, or jQuery site effortlessly with our copy-and-paste code."
//           widgets={widgets}
//         />
//       </div>
//     </div>
//   );
// };

// export default Integration;



// import React from 'react';
// import useBaseUrl from "@docusaurus/useBaseUrl";
// import FrameworkGrid from '../components/framework-card/framework-grid';
// import WidgetsGrid from '../components/widget-card/widgets';

// const Integration = () => {
//   // Helper function to get the correct icon path
//   const getIconPath = (iconName) => useBaseUrl(`/imgs/logos/${iconName}`);

//   // UI Kits data
//   const uiKits = [
//     {
//       id: 'react',
//       title: 'React',
//       version: '6',
//       icon: getIconPath('react.svg'),
//       link: '/ui-kit/react/v6/overview'
//     },
//     {
//       id: 'react-native',
//       title: 'React Native',
//       version: '4',
//       icon: getIconPath('react.svg'),
//       link: '/ui-kit/react-native/overview'
//     },
//     {
//       id: 'ios',
//       title: 'iOS',
//       version: '5',
//       icon: getIconPath('swift.svg'),
//       link: '/ui-kit/ios/v5/overview'
//     },
//     {
//       id: 'android',
//       title: 'Android',
//       version: '5',
//       icon: getIconPath('android.svg'),
//       link: '/ui-kit/android/v5/overview'
//     },
//     {
//       id: 'flutter',
//       title: 'Flutter',
//       version: '1',
//       icon: getIconPath('flutter.svg'),
//       link: '/ui-kit/flutter/overview'
//     },
//     {
//       id: 'angular',
//       title: 'Angular',
//       version: '5',
//       icon: getIconPath('angular.svg'),
//       link: '/ui-kit/angular/overview'
//     },
//     {
//       id: 'vue',
//       title: 'Vue',
//       version: '2',
//       icon: getIconPath('vue.svg'),
//       link: '/ui-kit/vue/overview'
//     }
//   ];

//   // SDKs data
//   const sdks = [
//     {
//       id: 'javascript',
//       title: 'JavaScript',
//       version: '4',
//       icon: getIconPath('javascript.svg'),
//       link: '/sdk/javascript/overview'
//     },
//     {
//       id: 'react-native-sdk',
//       title: 'React Native',
//       version: '4',
//       icon: getIconPath('react.svg'),
//       link: '/sdk/react-native/overview'
//     },
//     {
//       id: 'ios-sdk',
//       title: 'iOS',
//       version: '4',
//       icon: getIconPath('swift.svg'),
//       link: '/sdk/ios/overview'
//     },
//     {
//       id: 'android-sdk',
//       title: 'Android',
//       version: '5',
//       icon: getIconPath('android.svg'),
//       link: '/sdk/android/overview'
//     },
//     {
//       id: 'flutter-sdk',
//       title: 'Flutter',
//       version: '1',
//       icon: getIconPath('flutter.svg'),
//       link: '/sdk/flutter/overview'
//     },
//     {
//       id: 'ionic-sdk',
//       title: 'Ionic',
//       version: '1',
//       icon: getIconPath('ionic.svg'),
//       link: '/sdk/ionic/overview'
//     }
//   ];

//   // Widget data
//   const widgets = [
//     {
//       id: 'wordpress',
//       title: 'Wordpress / BuddyPress',
//       icon: getIconPath('wp.svg'),
//       link: '/widget/wordpress-buddypress'
//     },
//     {
//       id: 'html',
//       title: 'HTML / Bootstrap / jQuery',
//       icon: getIconPath('html.svg'),
//       link: '/widget/html-bootstrap-jquery'
//     }
//   ];

//   return (
//     <div className="mb-6 mt-16 px-6 md:px-16 flex w-full items-center justify-center flex-col">
//       <div className="flex w-full max-w-[1440px] items-start flex-col">
//         {/* UI Kits Section */}
//         <FrameworkGrid
//           title="UI Kits"
//           description="Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface."
//           frameworks={uiKits}
//         />

//         {/* SDKs Section */}
//         <FrameworkGrid
//           title="SDKs"
//           description="Use Our SDKs to tap into the full potential of CometChat while building your own user interface."
//           frameworks={sdks}
//         />

//         {/* Widgets Section */}
//         <WidgetsGrid
//           title="Widgets"
//           description="Integrate chat into any simple HTML, Bootstrap, or jQuery site effortlessly with our copy-and-paste code."
//           widgets={widgets}
//         />
//       </div>
//     </div>
//   );
// };

// export default Integration;