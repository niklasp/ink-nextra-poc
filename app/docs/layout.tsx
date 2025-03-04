import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import "nextra-theme-docs/style.css";

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
  // const filteredPageMap = pageMap.filter((page) => page.path !== "/");
  //
  return (
    <Layout
      navbar={navbar}
      pageMap={pageMap}
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
