// add a loader to prevent Page not found before it's rendered
import react from "react";

export default function Loader() {
  return react.createElement("div", null, "Loading...");
}
