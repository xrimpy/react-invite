import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Layout from "./layout/Layout";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<Layout><App /></Layout>);
});