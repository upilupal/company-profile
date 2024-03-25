"use client";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto py-4 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
            HART
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-6">
            <h3 className="text-md cursor-pointer" onClick={() => router.push("/")}>
              Home
            </h3>
            <Link href="/about">
              <h3 className="text-md">About</h3>
            </Link>
            <Link href="/services">
              <h3 className="text-md">Services</h3>
            </Link>
            <Link href="/teams">
              <h3 className="text-md">Teams</h3>
            </Link>
          </div>
        </div>

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild className="block md:hidden">
            <Button variant="ghost">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href="/">Home</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/about">About</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/services">Services</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/teams">Teams</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="block md:hidden">
          <NavDrawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
