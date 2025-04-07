"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react";

export function SidebarToggle() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Button size="lg" onClick={toggleSidebar} variant="ghost">
      {open ? (
        <ArrowLeftToLine className="w-4 h-4" />
      ) : (
        <ArrowRightFromLine className="w-4 h-4 transition-all duration-200" />
      )}
    </Button>
  );
}
