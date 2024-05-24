"use client";

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarTitle,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarFooter,
  DashboardSidebarMain,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
} from "@/components/dashboard/sidebar";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import Logo from "@/components/logo/logo";

export function MainSidebar() {
  const pathName = usePathname();

  const active = (path: string) => {
    return pathName === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>

      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink active={active("/app")} href="/app">
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              active={active("/app/settings")}
              href="/app/settings"
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links Extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink active={active("/")} href="/">
              Precisa de ajuda
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink active={active("/")} href="/">
              Site
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}
