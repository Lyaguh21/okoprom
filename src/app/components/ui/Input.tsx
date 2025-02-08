import * as React from "react";

import { cn } from "../libs/Utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex h-9 w-full rounded-xl border border-[var(--gray)] bg-transparent px-3 py-1 text-base font-semibold shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-[var(--black)] disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      sz: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-5",
        "3xl": "h-16 px-5 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      sz: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: any;
  endIcon?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, sz, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="w-full relative">
        {StartIcon && (
          <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
            {StartIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ sz }),
            startIcon && "pl-8",
            endIcon && "pr-8",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {EndIcon}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
