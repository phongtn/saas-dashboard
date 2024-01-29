import '@/app/ui/global.css';
import { inter, playfair } from '@/app/ui/fonts';
import React from "react";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: {
    template: '%s | SaaS Dashboard',
    default: 'SaaS Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://saas-dashboard-roan.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
