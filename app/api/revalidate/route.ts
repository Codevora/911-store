import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

export async function POST(request: NextRequest) {
 const tag = request.nextUrl.searchParams.get("tag");
 const secret = request.nextUrl.searchParams.get("secret");

 if (secret !== process.env.TOKEN) {
  return NextResponse.json(
   {status: 401, message: "Unauthorized"},
   {status: 401}
  );
 }

 if (!tag) {
    return NextResponse.json(
        {status: 400, message: "Missing Tag Param"},
        {status: 400}
    )
 }

 revalidateTag(tag);

 return NextResponse.json({revalidate:true, now:Date.now()})
}
