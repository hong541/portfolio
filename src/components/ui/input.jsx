import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-textLight/10 focus:border-prime font-light bg-backgroundLight px-4 py-5 text-base placeholder:text-textLight/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
