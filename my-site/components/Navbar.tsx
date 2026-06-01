"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Надя Черная
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/">Главная</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/about">Обо мне</Link>

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
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Блог
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
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