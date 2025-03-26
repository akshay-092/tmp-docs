import { useHistory } from "@docusaurus/router";
import React, { useEffect } from "react";

// Default implementation, that you can customize
export default function Root({ children }) {
  const history = useHistory();
  function openLinkUsingDocusaurusRouter(link) {
    history.push(link);
  }
  useEffect(() => {
    window.openLinkUsingDocusaurusRouter = openLinkUsingDocusaurusRouter;
  }, []);

  return <>{children}</>;
}
