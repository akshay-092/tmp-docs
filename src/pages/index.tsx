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

export default function Homepage() {
  const data = {
    title: "Get Started",
    content: " Seamlessly integrate real-time chat, voice, and video functionalities. Build your chat app with CometChat by picking the implementation method that aligns best with your goals."
  }
  
  return (
    <Layout
      description={metadata.description}
      wrapperClassName="homepage flex flex-col"
      noFooter>
      <Head>
        <link rel="prefetch" href="/css/elements.min.css" />
      </Head>
      <Hero data={data}/>
      <Integration />
      <APIMigration />
      <SampleApps />
      {/* <ImplementationGuides /> */}
      <Help />
      <Footer />
    </Layout>
  );
}
