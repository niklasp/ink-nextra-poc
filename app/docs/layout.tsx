import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";
import { Folder, PageMapItem } from "nextra";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<b>ink!</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();
  // remove the index page from page map and make docs top level
  // the page map contains
  // index: {...}
  // docs: { children: [...]}
  // ubator: {...}
  const filteredPageMap = pageMap.filter(
    (page: PageMapItem) =>
      typeof page === "object" && "route" in page && page.route !== "/"
  );
  const docsPageMap = filteredPageMap.find(
    (page: PageMapItem) => "name" in page && page.name === "docs"
  ) as Folder;
  return (
    <Layout
      navbar={navbar}
      pageMap={[...docsPageMap?.children]}
      docsRepositoryBase="https://github.com/niklasp/ink-nextra-poc/tree/main"
      footer={footer}
      sidebar={{
        autoCollapse: true,
        defaultOpen: true,
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
      }}
      navigation={{
        prev: true,
        next: true,
      }}
    >
      {children}
      {/* <pre>{JSON.stringify(pageMap, null, 2)}</pre> */}
    </Layout>
  );
}
