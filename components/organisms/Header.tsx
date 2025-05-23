import React from "react";
import { Logo } from "@/components/atoms/Logo";
import { Navbar } from "./Navbar";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-noir-primary text-noir-text shadow">
      <div className="flex items-center space-x-4">
          <Logo src="/logo.png" alt="MiStante" size={48} />
        <h1 className="text-2xl font-bold">MiStante</h1>
      </div>
      <Navbar />
      <Link href="/login" passHref>
        <Button variant="secondary">Sign In</Button> {/* */}
      </Link>
    </header>
  );
}
