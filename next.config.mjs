import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/docs",
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages with custom domains
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
});
