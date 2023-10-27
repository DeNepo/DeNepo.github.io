import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/denepo/denepo.github.io",
  },
  docsRepositoryBase: "https://github.com/denepo/denepo.github.io",
  footer: {
    text: "You can save any page as a PDF by opening it, ctr-p, then opening the document instead of printing it.",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: (
    <>
      <img src="/denepo-logo-white.png" width="50em" height="50em" />

      <span style={{ marginLeft: ".5em", fontWeight: 800 }}>
        De Nepo: Open Ed
      </span>
    </>
  ),
  search: {
    placeholder: "search this page",
  },
  primaryHue: {
    dark: 310,
    light: 252,
  },
};

export default config;
