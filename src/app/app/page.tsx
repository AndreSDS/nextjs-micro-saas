import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/services/auth";
import { UserInfo } from "./_components/user-info";
import {
  DashBoardPage,
  DashBoardPageHeader,
  DashBoardPageHeaderTitle,
  DashBoardPageMain,
} from "@/components/dashboard/dashboard";

export default async function Page() {
  const session = await auth();

  return (
    <DashBoardPage>
      <DashBoardPageHeader>
        <DashBoardPageHeaderTitle>Tarefas</DashBoardPageHeaderTitle>
      </DashBoardPageHeader>

      <DashBoardPageMain>
        <DashBoardPageHeaderTitle>Tarefas</DashBoardPageHeaderTitle>
      </DashBoardPageMain>
    </DashBoardPage>
  );
}
