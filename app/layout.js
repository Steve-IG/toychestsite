import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.toychest.ai"),
  title: "ToyChest.AI | What if every toy could unlock a video game?",
  description:
    "ToyChest.AI turns physical toys into playable characters, items, and rewards inside games with camera-based recognition and no special hardware.",
  openGraph: {
    title: "ToyChest.AI | Turn Toys Into Game Content",
    description:
      "Computer vision that connects physical toys to digital game rewards without special hardware.",
    url: "https://www.toychest.ai",
    siteName: "ToyChest.AI",
    images: [
      {
        url: "/assets/toychestlogo.png",
        width: 1200,
        height: 630,
        alt: "ToyChest.AI logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToyChest.AI | Turn Toys Into Game Content",
    description:
      "ToyChest.AI helps toy brands and game studios turn toys into in-game content with camera-based recognition.",
    images: ["/assets/toychestlogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S7T67FCBR1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S7T67FCBR1');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#efe8db] text-[#17171b] antialiased`}>
        <Script id="linkedin-partner-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8951740";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) { window.lintrk.q.push([a, b]); };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        {children}
        <Analytics />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8951740&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
