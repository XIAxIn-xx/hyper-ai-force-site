import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type NoBreakProps = {
  children: ReactNode;
  className?: string;
};

export function NoBreak({ children, className }: NoBreakProps) {
  return <span className={cn("zh-phrase whitespace-nowrap", className)}>{children}</span>;
}
