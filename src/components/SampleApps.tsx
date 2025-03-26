// import React from "react";
// import { GithubIcon } from "../icons";
// import useBaseUrl from "@docusaurus/useBaseUrl";

// const DATA = [
//   {
//     title: "React Chat App",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-react",
//     thumbnail: "react-image.png",
//   },
//   {
//     title: "React Native Chat App",
//     description:
//       "A fully functional real-time messaging app built using CometChat Vue UI Kit",
//     link: "https://github.com/cometchat-pro/cometchat-chat-sample-app-react-native",
//     thumbnail: "react-native-image.png",
//   },
//   {
//     title: "iOS Chat App",
//     description:
//       "This sample app enables users to send text and multimedia messages like images, videos, documents.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-ios-swift",
//     thumbnail: "ios-image.png",
//   },
//   {
//     title: "Android Chat App (Java)",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-android-java",
//     thumbnail: "android-image.png",
//   },
//   {
//     title: "Android Chat App (Kotlin)",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-sample-app-android-kotlin",
//     thumbnail: "android-image.png",
//   },
//   {
//     title: "Flutter Chat App",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-flutter",
//     thumbnail: "flutter-image.png",
//   },
//   {
//     title: "Vue Chat App",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-vue",
//     thumbnail: "vue-image.png",
//   },
//   {
//     title: "Angular Chat App",
//     description:
//       "Fully functional real-time messaging app capable of one-on-one, group messaging, voice & video calling.",
//     link: "https://github.com/cometchat/cometchat-chat-sample-app-angular",
//     thumbnail: "angular-image.png",
//   },
// ];

// function SampleApps() {
//   return (
//     <div className="sample-app" style={{ backgroundColor: "#F6F6FA" }}>
//       <div className="con--cust mb-10 mt-14 flex flex-col items-center">
//         <div className="flex w-full  max-w-[1440px] flex-row items-start justify-between md:items-center">
//           <div className="flex w-11/12 flex-col items-start">
//             <h1 className="h--cust m-0 mb-1 text-cst-sec-title dark:text-cst-sec-title-dark font-satoshi font-semibold" style={{ color: "#14131D", fontSize: "3rem", lineHeight: "106%" }}>
//               Sample Apps
//             </h1>
//             <p className="dark:text-cst-sec-title-dark p--cust font--custom--thin  font-satoshi font-medium" style={{ color: "#14131D", opacity: "0.74", letterSpacing: "0.00688rem", lineHeight: "120%", fontSize: "1.375rem" }}>
//             Explore practical examples of what you can achieve, and don't forget to check out our <a href="https://www.cometchat.com/personalized-demo">Interactive Demo</a>.
//             </p>
//           </div>
//           {/* view more */}
//           <a
//             target="_blank"
//             href="https://github.com/cometchat"
//             className="font--custom--thin flex w-fit dark:text-cst-sec-title-dark flex-col items-start justify-center whitespace-nowrap rounded-xl border border-solid border-cst-border bg-[#14131D05] p-[10px] text-xs text-cst-black no-underline dark:border-cst-border-dark dark:text-cst-whitefont-satoshi font-semibold"
//             style={{ color: "#14131D" }}
//           >
//             View All
//           </a>
//         </div>
//         <div className="mt-3 grid w-full max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-4 md:gap-10">
//           {DATA.map((item) => (
//             <Card key={item.title} {...item} />
//           ))}
//         </div>
//       </div>
//       <div className="p-12">
//         <ADCard />
//       </div>
//     </div>
//   );
// }

// export default SampleApps;

// function Card({ title, description, thumbnail, link }) {
//   return (
//     <div>
//       <img
//         src={useBaseUrl(`/imgs/${thumbnail}`)}
//         alt={title}
//         className="mb-1 aspect-video w-full rounded-16px object-cover"
//       />
//       <h3 className="m-0 mb-1 p-1 dark:text-cst-sec-title-dark font-satoshi font-semibold" style={{ color: "#14131D", opacity: "0.84", lineHeight: "106%", fontSize: "1.375rem" }}>
//         {title}
//       </h3>
//       {/* <p className="font--custom--thin p--cust text-cst-sec-subtitle dark:text-cst-sec-subtitle-dark">
//         {description}
//       </p> */}
//       <a
//         target="_blank"
//         href={link}
//         className="font--custom--thin m-1 flex w-fit flex-row items-center justify-center whitespace-nowrap rounded-[14px] border border-solid  border-cst-border bg-[#14131D05] p-[10px] px-3 py-2 text-xm text-cst-black no-underline dark:border-cst-border-dark  font-satoshi font-semibold mt-4 dark:text-[#FAFAFF]"
//         style={{ color: "#14131D" }}
//       >
//         {/* <GithubIcon className="github-clone-sample-apps mr-[8px] h-[44px] w-[20px] fill-black  dark:fill-white" /> */}
//         <GithubIcon className="github-clone-sample-apps mr-[8px] h-[20px] w-[20px] fill-black  dark:fill-white" />
//         Clone
//       </a>
//     </div>
//   );
// }


// function ADCard() {
//   return (
//     <div className=" m-auto z-10 flex w-11/12 max-w-[1440px] transform flex-col items-center justify-center rounded-[32px] bg-white dark:bg-cst-card-bg-dark md:-bottom-[95px] md:w-3/4">
//       <div
//         className="relative flex h-[280px] w-full flex-col items-start overflow-hidden rounded-[32px] border border-solid border-[#14131D0A] bg-[#14131D0F] bg-opacity-10 md:h-[190px] ad-card p-8"
//         style={{
//           boxShadow: "0px 4px 20px 0px #14131D0F",
//         }}
//       >
//         <h1 className="mb-1 dark:text-cst-sec-title-dark font-satoshi font-semibold" style={{ color: "#14131D", fontSize: "1.75rem", lineHeight: "106%" }}>CometChat solutions office hours</h1>
//         <p className="font--custom--thin p--cust dark:text-cst-sec-title-dark font-satoshi font-medium" style={{ color: "#14131D", fontSize: "1.125rem", lineHeight: "120%", letterSpacing: "0.00563rem" }}>
//           Join our solutions office hours to brainstorm and ideate on your use cases, get
//           <br />
//           guidance on integration from our solution engineers.
//         </p>
//         <a
//           target="_blank"
//           className="text-md rounded-xl bg-[#6852D6] py-3 px-4 text-[#FCFCFE] no-underline font-satoshi h-[44px] font-semibold"
//           href="https://www.cometchat.com/office-hours"
//           style={{ color: "#14131D", fontSize: "0.875rem", lineHeight: "150%", letterSpacing: "0.0175rem" }}

//         >
//           Book your slot
//         </a>
//         <img
//           src={useBaseUrl("/imgs/planets2.svg")}
//           alt="Planets2"
//           className="absolute bottom-0 right-0 w-[180px] object-contain md:w-[250px]"
//         />
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './sample-apps.module.css';

// GitHub Icon component
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={props.className}
    width={props.width || 16}
    height={props.height || 16}
  >
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const SampleAppsSection = () => {
  const sampleApps = [
    {
      title: "React Chat App",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-react"
    },
    {
      title: "Android Chat App (Kotlin)",
      link: "https://github.com/cometchat/cometchat-sample-app-android-kotlin"
    },
    {
      title: "React Native Chat App",
      link: "https://github.com/cometchat-pro/cometchat-chat-sample-app-react-native"
    },
    {
      title: "Flutter Chat App",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-flutter"
    },
    {
      title: "iOS Chat App",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-ios-swift"
    },
    {
      title: "Vue Chat App",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-vue"
    },
    {
      title: "Android Chat App (Java)",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-android-java"
    },
    {
      title: "Angular Chat App",
      link: "https://github.com/cometchat/cometchat-chat-sample-app-angular"
    }
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Sample Apps</h2>
        <Link
          to="https://github.com/cometchat"
          className={styles.viewAllButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          View All
        </Link>
      </div>

      <p className={styles.sectionDescription}>
        Explore practical examples of what you can achieve, and don't forget to check out our Interactive Demo.
      </p>

      <div className={styles.appsGrid}>
        <div className={styles.appsColumn}>
          {sampleApps.slice(0, 4).map((app) => (
            <div key={app.title} className={styles.sampleApp}>
              <div className={styles.appTitle}>{app.title}</div>
              <Link
                to={app.link}
                className={styles.cloneButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className={styles.githubIcon} width={16} height={16} />
                Clone
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.appsColumn}>
          {sampleApps.slice(4, 8).map((app) => (
            <div key={app.title} className={styles.sampleApp}>
              <div className={styles.appTitle}>{app.title}</div>
              <Link
                to={app.link}
                className={styles.cloneButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className={styles.githubIcon} width={16} height={16} />
                Clone
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.officeHoursSection}>
        <div className={styles.officeHoursCard}>
          <div className={styles.officeHoursContent}>
            <h3 className={styles.officeHoursTitle}>CometChat Solutions Office Hours</h3>
            <p className={styles.officeHoursDescription}>
              Join our solutions office hours to brainstorm and ideate on your use cases, get
              guidance on integration from our solution engineers.
            </p>
            <Link
              to="https://www.cometchat.com/office-hours"
              className={styles.bookSlotButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your slot
            </Link>
          </div>
          <img
            src={useBaseUrl("/imgs/clock-bg.svg")}
            alt="Office Hours"
            className={styles.officeHoursImage}
          />
        </div>
      </div>
    </section>
  );
};

export default SampleAppsSection;