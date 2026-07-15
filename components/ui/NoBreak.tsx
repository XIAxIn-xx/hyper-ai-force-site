import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type NoBreakProps = {
  children: ReactNode;
  className?: string;
};

export function NoBreak({ children, className }: NoBreakProps) {
  return <span className={cn("zh-phrase inline-block whitespace-nowrap", className)}>{children}</span>;
}
