import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtlasHub Academy",
  description: "Knowledge, learning and applied capability for the augmented age.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
