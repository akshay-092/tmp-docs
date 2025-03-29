import React from "react";
import Layout from "@theme/Layout";
const metadata = require("../data/metadata.json");
import Head from "@docusaurus/Head";
import Hero from "../components/Hero";
import APIMigration from "../components/APIMigration";
import SampleApps from "../components/SampleApps";
import Help from "../components/Help";
import Footer from "../components/Footer";
import Integration from "../components/Integration"
import styles from '../pages/index.module.css';
import Link from '@docusaurus/Link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import FrameworkGrid from "./framework-grid";
import useBaseUrl from "@docusaurus/useBaseUrl";
import WidgetsGrid from "./widgets";
import ApiCardsRow from "./ApiCardsRow";
import SampleAppsSection from "./sample-apps";
import AdditionalResources from "./additional-resources";

export default function Homepage() {
  const data = {
    title: "Get Started",
    content: " Seamlessly integrate real-time chat, voice, and video functionalities. Build your chat app with CometChat by picking the implementation method that aligns best with your goals."
  }
  const getIconPath = (iconName) => useBaseUrl(`/imgs/logos/${iconName}`);


  const uiKits = [
    {
      id: 'react',
      title: 'React',
      version: '3',
      icon: getIconPath('react.svg'),
      link: useBaseUrl('ui-kit/react/overview'),
    },
    {
      id: 'react-native',
      title: 'React Native',
      version: '4',
      icon: getIconPath('react.svg'),
      link: useBaseUrl('ui-kit/react-native/overview')
    },
    {
      id: 'angular',
      title: 'Angular',
      version: '5',
      icon: getIconPath('angular.svg'),
      link: useBaseUrl('ui-kit/angular/overview')
    },
    {
      id: 'ios-swift',
      title: 'iOS Swift',
      version: '3',
      icon: getIconPath('swift.svg'),
      link: useBaseUrl('ui-kit/ios/v5/overview')
    },
    {
      id: 'android-kotlin',
      title: 'Android Kotlin',
      version: '4',
      icon: getIconPath('android.svg'),
      link: useBaseUrl('ui-kits/android-kotlin/installation')
    },
    {
      id: 'android-java',
      title: 'Android Java',
      version: '3',
      icon: getIconPath('android.svg'),
      link: useBaseUrl('ui-kit/android/v5/overview')
    },
    {
      id: 'vue',
      title: 'Vue',
      version: '2',
      icon: getIconPath('vue.svg'),
      link: useBaseUrl('ui-kits/vue/installation')
    }
  ];

  const sdks = [
    {
      id: 'react-sdk',
      title: 'React',
      version: '5',
      icon: getIconPath('react.svg'),
      link: useBaseUrl('sdk/javascript/overview')
    },
    {
      id: 'react-native-sdk',
      title: 'React Native',
      version: '4',
      icon: getIconPath('react.svg'),
      link: useBaseUrl('sdks/react-native/installation')
    },
    {
      id: 'android-sdk',
      title: 'Android',
      version: '5',
      icon: getIconPath('android.svg'),
      link: useBaseUrl('sdks/android/installation')
    },
    {
      id: 'ios-swift-sdk',
      title: 'iOS Swift',
      version: '3',
      icon: getIconPath('swift.svg'),
      link: useBaseUrl('/sdks/ios-swift/installation')
    },
  ];

  // Widget data
  const widgets = [
    {
      id: 'wordpress',
      title: 'Wordpress / BuddyPress',
      icon: getIconPath('wp.svg'),
      link: '/docs/widgets/wordpress'
    },
    {
      id: 'html',
      title: 'HTML / Bootstrap / jQuery',
      icon: getIconPath('html.svg'),
      link: '/docs/widgets/html'
    }
  ];

  return (
    <Layout
    // title={`${siteConfig.title}`}
    // description={siteConfig.tagline}
    >
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.breadcrumbs}>
            <Link to="/">Home</Link> <span>
              <MdOutlineKeyboardArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </span> <span>Docs</span>
          </div>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Get Started</h1>
            <p className={styles.heroDescription}>
              Seamlessly integrate real-time chat, voice, and video functionalities. Build your chat app by picking the
              implementation method that aligns best with your goals.
            </p>
          </div>
          <FrameworkGrid
            title="UI Kits"
            description="Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface."
            frameworks={uiKits}
          />
          <FrameworkGrid
            title="SDKs"
            description="Use Our SDKs to tap into the full potential while building your own user interface."
            frameworks={sdks}
          />
          <WidgetsGrid
            title="Widgets"
            description="Integrate chat into any simple HTML, Bootstrap, or jQuery site effortlessly with our copy-and-paste code."
            widgets={widgets}
          />
          <ApiCardsRow className="container" />

          {/* Sample Apps Section */}
          <SampleAppsSection />

          {/* Additional Resources Section */}
          <AdditionalResources />

        </div>
      </main>
    </Layout>


    // <Layout
    //   description={metadata.description}
    //   wrapperClassName="homepage flex flex-col"
    //   noFooter>
    //   <Head>
    //     <link rel="prefetch" href="/css/elements.min.css" />
    //   </Head>
    //   <Hero data={data} />
    //   <Integration />
    //   <APIMigration />
    //   <SampleApps />
    //   {/* <ImplementationGuides /> */}
    //   <Help />
    //   <Footer />
    // </Layout>
  );
}
