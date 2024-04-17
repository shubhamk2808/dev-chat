import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Chat | Chat",
  description: "Created with Next js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}
