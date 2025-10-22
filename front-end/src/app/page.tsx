import About from "@/components/common/about";
import Greetings from "@/components/common/greetings";
import Projects from "@/components/common/projects";
import Skills from "@/components/common/skills";
import { Metadata } from "next";
import Contact from "@/components/common/contact";

export const metadata: Metadata = {
  title: "محمدامین درخشنده | توسعه‌دهنده وب",
  description:
    "سلام . محمد امین درخشنده هستم ، توسعه دهنده وب . این رزومه آنلاین و پورتفولیوی من است . در این صفحه اطلاعاتی درباره من ، نمونه کارها و راه های ارتباط با من قرار دارد .",
  keywords: [
    "Amin Derakhshande",
    "Derakhshande",
    "developer",
    "Frontend Developer",
    "Next.js",
    "Nextjs",
    "React",
    "Typescript",
    "Javascript",
    "Web Developer",
    "Portfolio",
    "Resume",
    "Online resume",
    "محمد امین درخشنده",
    "درخشنده",
    "توسعه‌دهنده",
    "توسعه‌دهنده وب",
    "برنامه‌نویس",
    "برنامه‌نویس وب",
    "برنامه نویسی",
    "پورتفولیو",
    "رزومه آنلاین",
    "رزومه",
    "فرانت‌اند",
    "فول استک",
    "نکست جی‌اس",
    "ری‌اکت",
    "طراحی سایت",
    "برنامه نویسی سایت",
    "جاوااسکریپت",
  ],
  authors: [
    { name: "Mohammad Amin Derakhshande", url: "https://aminderakhshande.ir" },
  ],
  openGraph: {
    title: "محمدامین درخشنده | توسعه‌دهنده وب",
    description:
      "سلام . محمد امین درخشنده هستم ، توسعه دهنده وب . این رزومه آنلاین و پورتفولیوی من است . در این صفحه اطلاعاتی درباره من ، نمونه کارها و راه های ارتباط با من قرار دارد .",
    url: "https://aminderakhshande.ir",
    siteName: "Amin Derakhshande Portfolio | رزومه آنلاین محمدامین درخشنده",
    images: [
      {
        url: "https://aminderakhshande.ir/aminderakhshande.ir_screenshot.webp",
        width: 1200,
        height: 630,
        alt: "Amin Derakhshande Portfolio Preview",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمدامین درخشنده | توسعه‌دهنده‌ وب",
    description:
      "سلام . محمد امین درخشنده هستم ، توسعه دهنده وب . این رزومه آنلاین و پورتفولیوی من است . در این صفحه اطلاعاتی درباره من ، نمونه کارها و راه های ارتباط با من قرار دارد .",
    images: ["https://aminderakhshande.ir/aminderakhshande.ir_screenshot.webp"],
  },
  metadataBase: new URL("https://aminderakhshande.ir"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="homepage-container flex flex-col gap-20 pb-20">
        <Greetings></Greetings>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </main>
  );
}
