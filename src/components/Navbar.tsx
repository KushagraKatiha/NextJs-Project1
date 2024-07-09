"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbar({ className }: { className?: String }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* First Menu Item */}
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        {/* Second Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/all_courses">All Courses</HoveredLink>

            <HoveredLink href="/guitar_courses">Guitar Courses</HoveredLink>

            <HoveredLink href="/drum_courses">Drum Courses</HoveredLink>

            <HoveredLink href="/fluet_courses">Fluet Courses</HoveredLink>

            <HoveredLink href="/piano_courses">Piano Courses</HoveredLink>
          </div>
        </MenuItem>

        {/* Third Menu Item */}
        <Link href={"/contact_us"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
