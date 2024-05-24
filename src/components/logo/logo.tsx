import { RocketIcon } from "@radix-ui/react-icons";

export default function Logo() {
  return (
    <div className="flex items-center justify-center bg-primary h-8 w-8 rounded-md">
      <RocketIcon className="h-3 w-3 text-primary-foreground" />
    </div>
  );
}
