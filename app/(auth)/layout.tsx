import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "Thread Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Mont.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
