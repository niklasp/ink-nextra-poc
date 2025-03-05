import { Head } from "nextra/components";
import "@/app/globals.scss";
import "@/style/ink.scss";
// import "@/style/legacy.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 280,
          saturation: {
            dark: 70,
            light: 70,
          },
          lightness: {
            dark: 70,
            light: 60,
          },
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
