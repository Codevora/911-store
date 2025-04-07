import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
 {
  id: 1,
  title: "Nike Air Max ex-1",
  price: "$10.00",
  image:
   "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/db7813d0-a95b-4222-bf49-54f558426b42/W+NIKE+FREE+METCON+6.png",
 },
 {
  id: 2,
  title: "Nike Yeezy ex-2",
  price: "$20.00",
  image:
   "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59807bff-b334-4a9f-9157-22e2151bfc55/W+NIKE+METCON+9.png",
 },
 {
  id: 3,
  title: "Nike Jordan ex-3",
  price: "$30.00",
  image:
   "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e6d88976-6349-4721-b033-76ab57b6922b/custom-nike-free-metcon-6-shoes-by-you.png",
 },
 {
  id: 4,
  title: "Nike Jordan ex-3",
  price: "$30.00",
  image:
   "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e6d88976-6349-4721-b033-76ab57b6922b/custom-nike-free-metcon-6-shoes-by-you.png",
 },
 {
  id: 5,
  title: "Nike Jordan ex-3",
  price: "$30.00",
  image:
   "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e6d88976-6349-4721-b033-76ab57b6922b/custom-nike-free-metcon-6-shoes-by-you.png",
 },
];

export async function GET(request: NextRequest) {
 const {searchParams} = new URL(request.url);
 const id = searchParams.get("id");

 if (id) {
  const detailProduct = await retrieveDataById("products", id);
  if (detailProduct) {
   return NextResponse.json({
    status: 200,
    message: "success",
    data: detailProduct,
   });
  }

  return NextResponse.json({
   status: 404,
   message: "Not Found",
   data: {},
  });
 }

 const products = await retrieveData("products");

 return NextResponse.json({
  status: 200,
  message: "success",
  data: products,
 });
}