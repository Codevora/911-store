import Link from "next/link";
import React from "react";

const Navbar = () => {
 return (
  <header className="fixed z-10 top-0 w-full bg-gradient-to-br from-slate-500 to-slate-800 p-5 text-white px-10">
   <nav className="container mx-auto flex items-center justify-between">
    {/*Logo*/}
    <Link href="/">
     <h1 className="text-3xl font-bold italic">911 Store</h1>
    </Link>

    {/*Links*/}
    <ul className="flex gap-5">
     <li>
      <Link href="/about">About</Link>
     </li>
     <li>
      <Link href="/product">Product</Link>
     </li>
     <li>
      <Link href="/contact">Contact</Link>
     </li>
    </ul>
    {/*Logo*/}
    <Link href="/sign-in">
     <h1>Masuk</h1>
    </Link>
   </nav>
  </header>
 );
};

export default Navbar;
