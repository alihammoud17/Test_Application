import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend",
  description: "Blank Next.js 16 application"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
