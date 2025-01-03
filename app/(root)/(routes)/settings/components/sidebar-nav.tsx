"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: any;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted text-primary"
              : "hover:bg-transparent hover:underline",
            "justify-start w-full"
          )}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          <div className="flex gap-2 items-center">
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="text-sm lg:text-base">{item.title}</span>
          </div>
        </Link>
      ))}
    </nav>
  );  
}
