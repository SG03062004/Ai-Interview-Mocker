"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  const router = useRouter();
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          <Link href="/dashboard">
            <h2>Dashboard</h2>
          </Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          <Link href="/dashboard/ques">
            <h2>Preparation</h2>
          </Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/upgrade" && "text-primary font-bold"
          }`}
        >
          <Link href="/dashboard/upgrade">
            <h2>Upgrade</h2>
          </Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}
        >
          <Link href="/dashboard/working">
            <h2>How it Works?</h2>
          </Link>
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
