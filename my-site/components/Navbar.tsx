"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleMenuClick = (href: string) => {
    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold"
          onClick={() => handleMenuClick("/")}
        >
          Надя Черная
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" onClick={() => handleMenuClick("/")}>
            Главная
          </Link>
          <Link href="/blog" onClick={() => handleMenuClick("/blog")}>
            Блог
          </Link>
          <Link href="/about" onClick={() => handleMenuClick("/about")}>
            Обо мне
          </Link>

          <input
            type="text"
            placeholder="Поиск"
            className="border rounded-full px-4 py-2"
          />
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => {
              handleMenuClick("/");
              setMenuOpen(false);
            }}
          >
            Главная
          </Link>

          <Link
            href="/blog"
            onClick={() => {
              handleMenuClick("/blog");
              setMenuOpen(false);
            }}
          >
            Блог
          </Link>

          <Link
            href="/about"
            onClick={() => {
              handleMenuClick("/about");
              setMenuOpen(false);
            }}
          >
            Обо мне
          </Link>

          <input
            type="text"
            placeholder="Поиск"
            className="border rounded-full px-4 py-2"
          />
        </div>
      )}
    </header>
  );
}