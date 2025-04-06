"use client";

import {signIn} from "next-auth/react";
import {login} from "@/lib/actions/auth";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function SignInForm() {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);

 const handleLogin = async (e: any) => {
  e.preventDefault();
  setError("");
  setLoading(true);
  try {
   const res = await signIn("credentials", {
    redirect: false,
    email: e.target.email.value,
    password: e.target.password.value,
    callbackUrl: "/dashboard",
   });
   if (!res?.error) {
    e.target.reset();
    setLoading(false);
    push("/dashboard");
   } else {
    setLoading(false);
    if (res.status === 401) {
     setError("Email atau Password salah");
    }
   }
  } catch (error) {
   console.log(error);
  }
 };

 return (
  <div className="flex flex-col gap-3 bg-white/30 backdrop-blur-xl shadow-lg rounded-[12px] p-5 lg:max-w-sm 2xl:max-w-md w-full items-center">
   <h1 className="text-2xl font-bold text-slate-800">Sign In</h1>
   <form
    onSubmit={handleLogin}
    className="flex flex-col gap-3 w-full">
    <input
     type="email"
     name="email"
     id="email"
     placeholder="Email"
     className="w-full bg-transparent border border-gray-800 focus:outline-none p-2 rounded"
    />
    <input
     type="password"
     name="password"
     id="password"
     placeholder="Password"
     className="w-full bg-transparent border border-gray-800 focus:outline-none p-2 rounded"
    />
    <button
     type="submit"
     className="w-full bg-slate-800 text-white p-2 rounded">
     {loading ? "Tunggu Sebentar..." : " Masuk"}
    </button>
   </form>
   <div className="flex w-full gap-2 items-center">
    <hr className="w-full" />
    <h1>or</h1>
    <hr className="w-full" />
   </div>
   <button
    onClick={() => login()}
    className="p-2 rounded w-full bg-slate-800 text-white flex items-center justify-center gap-2">
    <FcGoogle className="text-xl" />
    Masuk dengan Google
   </button>
   <div className="flex space-x-2">
    <h1>Belum punya akun?</h1>
    <Link href="/sign-up">
     <p className="text-blue-400 hover:underline">Daftar</p>
    </Link>
   </div>
  </div>
 );
}
