import type { Metadata } from "next";
import RecoilRootWrapper from "@/presentation/states/recoil_wrapper";

export const metadata: Metadata = {
  title: "AI 고려대학교",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilRootWrapper>
        <body>
          {children}
        </body>
      </RecoilRootWrapper>
    </html>
  );
}