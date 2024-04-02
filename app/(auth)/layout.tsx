// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Dev Chat | Login",
//   description: "Created by Next js",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex justify-center items-center">
        { children }
    </main>
  );
}
