import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/ui";
import { MotionController } from "@/components/motion";
import "./globals.css";
const siteUrl = process.env.SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  title: {
    default: "Lingesh Sashi Kumar — Student & Developer",
    template: "%s — Lingesh Sashi Kumar",
  },
  description:
    "Rutgers student exploring software engineering, artificial intelligence, cloud computing, and cybersecurity.",
  openGraph: {
    type: "website",
    siteName: "Lingesh Sashi Kumar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;
// Enables JS-dependent styles (collapsed mobile menu, scroll reveals). If the
// app never hydrates, the failsafe restores the no-JS presentation.
const motionScript = `(function(){var d=document.documentElement;d.classList.add('js');if('IntersectionObserver' in window)d.classList.add('motion-ready');setTimeout(function(){if(!('hydrated' in d.dataset))d.classList.remove('js','motion-ready')},4000)})()`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MotionController />
        <Navigation />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
