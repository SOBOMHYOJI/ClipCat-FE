"use client";
import { useState } from "react";
import Logo from "@/shared/ui/Logo/Logo";
import NavTabs from "@/features/nav-tabs/ui/NavTabs";
import LanguageSwitcher from "@/features/language-switcher/ui/LanguageSwitcher";
import type { NavKey } from "@/features/nav-tabs/model/types";

export default function Header() {
  const [tab, setTab] = useState<NavKey>("upload");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface text-on">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="h-20 flex items-center justify-between">
          <Logo />
          <NavTabs value={tab} onChange={setTab} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
