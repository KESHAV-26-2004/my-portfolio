import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/style.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', 
  //preload: true,
});

export const metadata = {
  title: "Keshav | Developer Portfolio",
  description: "CS undergrad passionate about building web experiences from scratch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      suppressHydrationWarning>
      {/*data-qb-installed="true" */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
