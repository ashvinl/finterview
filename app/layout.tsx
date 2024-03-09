import "../styles/globals.css";
import { Metadata } from "next";
import { CSPostHogProvider } from './providers'

export const metadata: Metadata = {
  title: "Finterview - AI-Powered Mock Interviews",
  openGraph: {
    title: "Finterview - AI-Powered Mock Interviews",
    description:
      "Finterview is an AI-powered mock interview platform that helps you practice for your next investment banking interview.",
    images: [
      {
        url: "https://usefinterview.com",
      },
    ],
  },
  metadataBase: new URL("https://usefinterview.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <CSPostHogProvider>
        <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
