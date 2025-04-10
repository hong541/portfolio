import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-textLight/10 bg-backgroundLight px-4 py-5 text-base placeholder:text-textLight/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-prime focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
