import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Recipes from '@site/src/components/recipesPage/Recipes';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Hero from '@site/src/components/Hero';
import Integration from '@site/src/components/Integration';
import APIMigration from '@site/src/components/APIMigration';
import SampleApps from '@site/src/components/SampleApps';
import Footer from '@site/src/components/Footer';

export default function BlogListPageWrapper(props) {
  const { metadata, items } = props;
  const data = {
    title:"Step-by-Step Tutorials",
    content: "Best-in-class tutorials and open source examples to help you build chat, voice and video apps with CometChat 🚀"
  }

  return (
    <>

      <Layout

        description={"reciepe"}
        wrapperClassName="homepage flex flex-col"
        noFooter>
        <Head>
          <link rel="prefetch" href="/css/elements.min.css" />
        </Head>
        <Hero data={data}/>
        <Recipes props={props} />
        <Footer />
      </Layout>

    </>
  );
}


