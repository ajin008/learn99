import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Learn99 - Learn Anything, Anytime, Anywhere",
    template: "%s | Learn99",
  },
  description:
    "Learn99 is a premium e-learning platform with minimal design, affordable pricing, and high-quality courses.",
  keywords: ["e-learning", "online courses", "AI learning", "Learn99", "education India"],
  metadataBase: new URL("https://www.learn99.com"),
  openGraph: {
    title: "Learn99 - Learn Anything, Anytime, Anywhere",
    description: "Premium e-learning platform designed for modern learners in India.",
    url: "https://www.learn99.com",
    siteName: "Learn99",
    images: [
      {
        url: "https://www.learn99.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learn99 - E-learning",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn99 - Learn Anything, Anytime, Anywhere",
    description: "Premium e-learning platform designed for modern learners.",
    images: ["https://www.learn99.com/og-image.png"],
  },
};
