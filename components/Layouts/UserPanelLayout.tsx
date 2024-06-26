import Navbar from "@/components/Common/Navs/Navbar";
import { PropsWithChildren } from "react";

export default function UserPanelLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="hidden xs:block my-6 z-40">
        <Navbar className="top-6 z-40" />
        <div className="h-[72px]" />
      </header>
      <main>{children}</main>

      <header className="block xs:hidden">
        <Navbar className="bottom-0" />
      </header>
    </>
  );
}
