import { GitHubIcon } from "nextra/icons";

export default {
  //   index: {
  //     title: "ink! Documentation",
  //     display: "hidden",
  //   },
  intro: {
    title: "Overview",
  },
  "getting-started": {
    title: "Getting Started",
  },
  // "ink!ubator": {
  //   title: "ink!ubator",
  //   type: "page",
  //   href: "/ubator",
  // },
  // You can use JSX elements to change the look of titles in the sidebar, e.g. insert icons
  //   contact: (
  //     <Italic className="my-class">
  //       <GitHubIcon height="20" />
  //       Contact Us
  //     </Italic>
  //   ),
  //   about: {
  //     // Alternatively, you can set title with `title` property
  //     title: "About Us",
  //     // ... and provide extra configurations
  //   },
};

// Custom component for italicized text
function Italic({
  children,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <i {...props}>{children}</i>;
}
