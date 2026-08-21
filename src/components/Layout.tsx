import DesktopNavbar from "@/components/DesktopNavbar";
import MobileTabBar from "@/components/MobileTabBar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="z-50 flex min-h-screen w-full flex-col">
      <div className="flex flex-col">
        <DesktopNavbar />
        <main className="flex-1 pb-12 sm:pb-0">{children}</main>
      </div>
      <MobileTabBar />
    </div>
  );
}
