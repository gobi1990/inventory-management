import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from './context/authContext';

export const metadata: Metadata = {
  title: "Inventory Management",
  description: "Inventory Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Helvetica'] antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}