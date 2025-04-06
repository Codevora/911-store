import Link from "next/link";

export default function AuthLayout({children}: {children: React.ReactNode}) {
 return (
  <div className="bg-gradient-to-br from-slate-500 to-slate-800 p-5 px-10">
   <header className="px-10 container mx-auto flex items-center justify-between text-white">
    {/*Logo*/}
    <Link href="/">
     <h1 className="text-3xl font-bold italic">911 Store</h1>
    </Link>

    {/*Links*/}
    <ul className="flex gap-5">
     <li>
      <Link href="/contact-us">Contact Us</Link>
     </li>
    </ul>
   </header>

   {/*Content*/}
   <main>{children}</main>
  </div>
 );
}
