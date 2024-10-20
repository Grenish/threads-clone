import type { Metadata } from "next";
import "../globals.css";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/Bottombar";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={Mont.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSideBar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
