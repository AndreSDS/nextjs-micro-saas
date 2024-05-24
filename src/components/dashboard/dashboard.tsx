import { cn } from "@/lib/utils";

export type PageGenericProps<T = any> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashBoardPage({ children, className }: PageGenericProps) {
  return <section className={cn("h-screen", className)}>{children}</section>;
}

export function DashBoardPageHeader({ children, className }: PageGenericProps) {
  return (
    <header className={cn("p-6 py-3 h-14 border-b border-border", className)}>
      {children}
    </header>
  );
}

export function DashBoardPageHeaderTitle({ children, className }: PageGenericProps) {
  return <h1 className={cn("text-muted-foreground uppercase", className)}>{children}</h1>;
}

export function DashBoardPageHeaderNav({ children, className }: PageGenericProps) {
  return (
    <nav className={cn("flex items-center space-x-2", className)}>
      {children}
    </nav>
  );
}

export function DashBoardPageMain({ children, className }: PageGenericProps) {
  return <main className={cn("p-6", className)}>{children}</main>;
}
