import {getToken} from "next-auth/jwt";
import {
 NextFetchEvent,
 NextRequest,
 NextResponse,
 NextMiddleware,
} from "next/server";

const onlyAdminPage = ["/dashboard"];
const authPage = ["/sign-in", "/sign-up"];

export default function withAuth(
 middleware: NextMiddleware,
 requireAuth: string[] = []
) {
 return async (req: NextRequest, next: NextFetchEvent) => {
  const {pathname} = req.nextUrl;
  if (requireAuth.includes(pathname)) {
   const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
   });
   if (!token && !authPage.includes(pathname)) {
    const url = new URL("/sign-in", req.url);
    url.searchParams.set("callbackUrl", encodeURI(req.url));
    return NextResponse.redirect(url);
   }
   if (token) {
    if (authPage.includes(pathname)) {
     return NextResponse.redirect(new URL("/", req.url));
    }
    if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
    }
   }
  }
  return middleware(req, next);
 };
}
