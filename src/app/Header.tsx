import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next.js13 Blog</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link href="/articles/new" className="border border-white-500  px-3 py-3 rounded-md">記事を書く</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
