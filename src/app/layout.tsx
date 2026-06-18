import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shrey Jaiswal | Software Developer & AI Systems Engineer",
  description:
    "Software Developer and AI Systems Engineer with 3+ years experience. Specializing in cross-platform systems (Tauri, Electron, Expo, Capacitor, MERN), local LLMs (Unsloth, Ollama), and Linux DevOps.",
  keywords: [
    "Software Developer",
    "Tauri",
    "Electron",
    "Expo",
    "Capacitor",
    "MERN Stack",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Unsloth",
    "Ollama",
    "NodeLink",
    "Groq AI",
    "LLaMA",
    "Python",
    "FastAPI",
    "Linux DevOps",
    "Home Lab",
  ],
  authors: [{ name: "Shrey Jaiswal" }],
  alternates: {
    canonical: "https://lazyshrey.in",
  },
  openGraph: {
    type: "website",
    url: "https://lazyshrey.in/",
    title: "Shrey Jaiswal - Software Developer & AI Systems Engineer",
    description:
      "Specializing in cross-platform desktop, mobile, and web applications using Tauri, Electron, Expo, and the MERN stack, combined with local LLM orchestration (Unsloth, Ollama) and Linux DevOps.",
    images: [
      {
        url: "https://raw.githubusercontent.com/lazyshrey/react-portfolio/refs/heads/main/public/mainpage.png",
        width: 1200,
        height: 630,
        alt: "Shrey Jaiswal Portfolio Main Page",
      },
    ],
    siteName: "Shrey Jaiswal Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrey Jaiswal - Software Developer & AI Systems Engineer",
    description:
      "Specializing in cross-platform desktop, mobile, and web applications, local LLMs, and Linux DevOps.",
    images: ["https://raw.githubusercontent.com/lazyshrey/react-portfolio/refs/heads/main/public/mainpage.png"],
  },
  icons: {
    icon: "/shreylazy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} lenis lenis-smooth`}>
      <head>
        <meta name="theme-color" content="#d9d9d9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shrey Jaiswal",
              "url": "https://lazyshrey.in",
              "jobTitle": "Software Developer & AI Systems Engineer",
              "description":
                "Software Developer specializing in cross-platform systems (Tauri, Electron, Expo, Capacitor), local LLM orchestration (Unsloth, Ollama), and custom audio servers (NodeLink).",
              "image": "https://raw.githubusercontent.com/lazyshrey/react-portfolio/refs/heads/main/public/mainpage.png",
              "sameAs": [
                "https://github.com/lazyshrey",
                "https://linkedin.com/in/shrey-jaiswal",
                "https://x.com/lazy_shrey",
                "https://melofy.lazyshrey.in",
                "https://chroma.lazyshrey.in",
              ],
              "skills": [
                "Software Development",
                "Cross-Platform Desktop Apps (Tauri, Electron)",
                "Mobile App Engineering (Expo, Capacitor)",
                "MERN Stack (Next.js, Node.js, Express, MongoDB)",
                "AI Orchestration (Ollama, LLaMA, Groq API)",
                "LLM Fine-Tuning (Unsloth)",
                "DevOps & SysAdmin (Linux, Home Lab)",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
