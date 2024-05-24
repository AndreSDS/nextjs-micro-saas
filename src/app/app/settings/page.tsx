import {
  DashBoardPage,
  DashBoardPageHeader,
  DashBoardPageHeaderTitle,
  DashBoardPageMain,
} from "@/components/dashboard/dashboard";

export default function SettingsPage() {
  return (
    <DashBoardPage>
      <DashBoardPageHeader>
        <DashBoardPageHeaderTitle>Configuracoes</DashBoardPageHeaderTitle>
      </DashBoardPageHeader>

      <DashBoardPageMain>
        <DashBoardPageHeaderTitle>Configuracoes</DashBoardPageHeaderTitle>
      </DashBoardPageMain>
    </DashBoardPage>
  );
}
