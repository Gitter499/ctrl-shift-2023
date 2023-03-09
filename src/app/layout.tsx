import { navStore } from "@/stores/navStore";
import { StoreProvider } from "@/util/easy-peasy";


import "./globals.css";

export const metadata = {
  title: "Ctrl-Shift 2023 Project",
  description: "A project for 2023 CtrlShift coding competition",
  twitter: {
    card: "summary",
    title: "Ctrl-Shift 2023 Project",
    description: "A project for 2023 CtrlShift coding competition",
    creator: "@rafayelamirkha1",
  },
};

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode,
}) {



  return (
    <html lang="en">
     
        <StoreProvider store={navStore}>
          <body>{children}</body>
        </StoreProvider>
   
    </html>
  );
}
