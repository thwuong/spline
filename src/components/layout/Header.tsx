import { cn } from "@/lib/utils";
import React from "react";
type HeaderProps = React.HTMLAttributes<HTMLElement>;
function Header({ children, className }: HeaderProps) {
    return <header className={cn("px-12 max-md:px-4 flex items-center justify-between", className)}>{children}</header>;
}

export default Header;
