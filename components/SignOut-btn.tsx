"use client";
import {logout} from "@/lib/actions/auth";

export default function SignOutBtn() {
 return <button onClick={() => logout()}>Keluar</button>;
}
