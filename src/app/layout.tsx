import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClimIoT",
  description: "Control de temperatura, humedad y análisis de datos en tiempo real.",
  authors: [{ name: 'Ivan Varona' }],
  keywords: [
    'dashboard',
    'UI',
    'card component',
    'ESP32',
    'Firebase',
    'Realtime Database',
    'temperatura',
    'humedad',
    'punto de rocío',
    'sensación térmica',
    'IoT',
    'ClimIoT', "desarrollador de software", "IoT", "Node.js", "JavaScript", "Next.js", "Tailwind", "React"
  ],

  openGraph: {
    title: 'ClimIoT',
    description: 'Control de temperatura, humedad y análisis de datos en tiempo real.',

    url: 'https://tusitio.com',
    siteName: 'ClimIoT',
    images: [
      {
        url: 'https://climiot.netlify.app/img/image.jpg',
        width: 1200,
        height: 630,
        alt: "Iván Varona | Dev",
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ClimIoT',
    description: 'Control de temperatura, humedad y análisis de datos en tiempo real.',
    images: ["https://climiot.netlify.app/img/image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
