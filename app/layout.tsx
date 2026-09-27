import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacansee JR Redirect",
  description: "Redirecting to Vacansee JR...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
