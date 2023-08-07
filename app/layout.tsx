import { PropsWithChildren } from 'react';

import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'UrbanFlo',
  description: 'A modern traffic planner',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
