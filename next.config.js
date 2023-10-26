const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = Object.assign(
  {
    assetPrefix: isProd ? "/denepo.github.io/" : "",
    images: {
      unoptimized: true,
    },
    // output: "export",
  },
  withNextra()
);
