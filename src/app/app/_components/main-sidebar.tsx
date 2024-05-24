"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
  SidebarFooter,
  SidebarMain,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
} from "@/components/dashboard/sidebar";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { UserDropdown } from "./user-dropdown";

export function MainSidebar() {
  const pathName = usePathname();

  const active = (path: string) => {
    return pathName === path;
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTitle>Dashboard</SidebarTitle>
      </SidebarHeader>

      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink active={active("/app")} href="/app">
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </SidebarNavLink>
            <SidebarNavLink
              active={active("/app/settings")}
              href="/app/settings"
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links Extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink active={active("/")} href="/">
              Precisa de ajuda
            </SidebarNavLink>
            <SidebarNavLink active={active("/")} href="/">
              Site
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  );
}
