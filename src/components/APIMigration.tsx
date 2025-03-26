// import React from "react";

// function APIMigration() {
//   return (
//     <div className="con--cust relative  flex flex-col items-center justify-center border-b border-l-0 border-r-0 border-t  border-solid border-cst-border  pb-16 pt-[80px] dark:border-cst-border-dark ">
//       <div className="flex w-full max-w-[1440px] flex-col items-start justify-start md:flex-row">
//         {/* api reference */}
//         <div className="flex  items-center flex-1 flex-col md:items-start">
//           <h1 className="h--cust leading-[1.1] text-cst-sec-title text-center md:text-left dark:text-cst-sec-title-dark font-satoshi font-semibold" style={{ color:"#14131D",fontSize:"3rem"}}>
//             Chat APIs
//           </h1>
//           <p className="text-center md:text-left font--custom--thin p--cust mt-1 w-10/12 leading-6  md:w-9/12 dark:text-cst-sec-title-dark font-satoshi font-medium" style={{ color: "#14131D", fontSize: "1.375rem", letterSpacing: ".00688rem", lineHeight: "120%", opacity: "0.74" }}>
//             Connect CometChat with your app and programatically manage users, groups and conversations with our Chat APIs.
//           </p>
//           <a
//             target="_blank"
//             href="https://api-explorer.cometchat.com/reference/chat-apis"
//             className="api-migration-link  dark:border-cst-border-dark dark:text-cst-white dark:text-cst-sec-title-dark text-md flex w-fit flex-col items-start justify-center rounded-xl border border-solid border-cst-border bg-cst-border px-6 py-2  no-underline font-satoshi font-semibold text-sm"
//             style={{ color:"#14131D"}}
//           >
//             Learn more
//           </a>
//         </div>
//         {/* hr */}
//         <div
//           className="absolute
//        left-0 top-0 z-10 hidden h-full w-[1px] translate-x-[48vw] transform bg-cst-border dark:bg-cst-border-dark md:flex"
//         ></div>
//         {/* migration guide */}
//         <div className="mt-10 flex items-center flex-1 flex-col md:items-start justify-start border-x-0 border-b-0 border-t border-solid border-cst-border pt-20   dark:border-cst-border-dark  md:mt-0 md:border-none md:pl-[40px]  md:pt-0">
//           <h1 className="h--cust leading-[1.1] text-center md:text-left  text-cst-sec-title dark:text-cst-sec-title-dark  font-satoshi font-semibold" style={{ color:"#14131D",fontSize:"3rem"}}>
//           Management APIs
//           </h1>
//           <p className="text-center md:text-left font--custom--thin p--cust mt-1 w-10/12 leading-6  md:w-9/12 dark:text-cst-sec-title-dark font-satoshi font-medium" style={{ color:"#14131D",fontSize:"1.375rem",letterSpacing:".00688rem",lineHeight:"120%",opacity:"0.74"}}>
//           Create and manage your CometChat apps, trigger webhooks and access dashboard features with our Management APIs.
//           </p>
//           <a target="_blank" href="https://api-explorer.cometchat.com/reference/management-apis" className="api-migration-link  dark:border-cst-border-dark dark:text-cst-white dark:text-cst-sec-title-dark text-md flex w-fit flex-col items-start justify-center rounded-xl border border-solid border-cst-border bg-cst-border px-6 py-2 no-underline font-satoshi font-semibold text-sm" style={{ color:"#14131D"}}>
//             Learn more
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default APIMigration;


import React from 'react';
import Link from '@docusaurus/Link';
import styles from './APIMigration.module.css';

const ApiCard = ({ title, description, learnMoreLink }) => {
  return (
    <div className={styles.apiCard}>
      <h3 className={styles.apiCardTitle}>{title}</h3>
      <p className={styles.apiCardDescription}>{description}</p>
      <div className={styles.apiCardFooter}>
        <Link to={learnMoreLink} className={styles.learnMoreButton}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

// Make className optional by providing a default value
const APIMigration = ({ className = '' }) => {
  return (
    <section className={`${styles.sectionContainer} ${className}`}>
      <div className={styles.apiCardsContainer}>
        <ApiCard
          title="Chat APIs"
          description="Connect CometChat with your app and programmatically manage users, groups and conversations with our Chat APIs."
          learnMoreLink="/docs/chat-apis"
        />
        <ApiCard
          title="Management APIs"
          description="Create and manage your CometChat apps, trigger webhooks and access dashboard features with our Management APIs."
          learnMoreLink="/docs/management-apis"
        />
      </div>
    </section>
  );
};

export default APIMigration;