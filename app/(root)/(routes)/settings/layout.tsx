import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { Settings, User } from "lucide-react";
import { SidebarNav } from "./components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Cá Nhân",
    href: "/settings",
    icon: <User />,
  },
  {
    title: "Mật Khẩu",
    href: "/settings/change-password",
    icon: <Settings />,
  },
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <Heading title="Cài Đặt" description="Quản lý tài khoản của bạn" />
        <Separator />
  
        {/* Content Layout */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* Sidebar */}
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
  
          {/* Main Content */}
          <div className="flex-1 lg:max-w-2xl p-4 lg:p-0">{children}</div>
        </div>
      </div>
    </>
  );  
};

export default SettingsLayout;
