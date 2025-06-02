"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuOptions } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
    const path = usePathname();
  return (
    <Sidebar className="w-64 h-screen flex flex-col border-r border-sidebar-border">
      <SidebarHeader className="bg-sidebar-accent flex items-center p-4 border-b border-sidebar-border">
        <h1 className="text-xl font-semibold text-sidebar-foreground">My own Perplexity</h1>
      </SidebarHeader>
      <SidebarContent className="flex-1 bg-accent p-4">
        <SidebarGroup>
          <SidebarMenu>
            {MenuOptions.map((menu, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton 
                    asChild 
                    className={`m-4 text-xl font-medium hover:bg-transparent hover:font-bold rounded-lg transition-colors 
                        ${path.includes(menu.path) && "font-bold"}`}
                >
                  <Link href={menu.path} className="flex items-center text-sidebar-foreground">
                    <menu.icon className="w-[28px] h-[28px]" />
                    <span className="">{menu.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <Button className="rounded-full mx-4 mt-4">Signup</Button>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="bg-accent p-6 border-t border-sidebar-border">
        <section className="p-1">
            <h2  className="text-gray-500">Try now</h2>
            <p className="text-gray-400">Upgrade for image upload, smarter AI and more Copilot</p>
            <Button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-600" variant={"ghost"}>Learn More</Button>
        </section>
      </SidebarFooter>
    </Sidebar>
  );
}