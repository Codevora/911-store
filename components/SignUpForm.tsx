"use client";
import { login } from "@/lib/actions/auth";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
 const {push} = useRouter();
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);
 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  const res = await fetch("/api/auth/register", {
   method: "POST",
   body: JSON.stringify({
    fullname: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
   }),
  });
  if (res.status === 200) {
   e.target.reset();
   setLoading(false);
   push("/sign-in");
  } else {
   setError("Email Sudah Terdaftar");
   setLoading(false);
  }
 }

 return (
  <div className="flex flex-col gap-3 bg-white/30 backdrop-blur-xl shadow-lg rounded-[12px] p-5 lg:max-w-sm 2xl:max-w-md w-full items-center">
   <h1 className="text-2xl font-bold text-slate-800">Sign In</h1>
   <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-3 w-full">
    <input
     type="text"
     name="name"
     id="name"
     placeholder="Name"
     className="w-full bg-transparent border border-gray-800 focus:outline-none p-2 rounded"
    />
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
     {loading ? "Tunggu Sebentar..." : " Daftar"}
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
    <h1>Sudah punya akun?</h1>
    <Link href="/sign-in">
     <p className="text-blue-400 hover:underline">Masuk</p>
    </Link>
   </div>
  </div>
 );}