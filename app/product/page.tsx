import {getData} from "@/services/products"
import Link from "next/link"

type ProductPageProps = {params: {slug: string[]}}

export default async function ProductPageProps(props: ProductPageProps) {
    const {params} = props
    const products = await getData("http://localhost:3000/api/product")

    return (
     <div className="min-h-screen py-4 flex flex-col gap-5 px-10 justify-center bg-gradient-to-br from-slate-800 to-slate-500">
      <div className="grid grid-cols-4 gap-5 place-items-center">
       {products.data.length > 0 &&
        products.data.map((product: any) => (
         <Link
          href={`/product/detail/${product.id}`}
          key={product.id}
          className="h-[300px] w-11/12 border rounded-lg bg-slate-800 flex flex-col justify-between p-3">
          <div className="max-h-[190px] justify-center flex items-center">
           <img
            src={product.image}
            alt="product image"
            className="h-full w-full object-cover rounded-lg"
           />
          </div>
          <div className="flex h-[100px] items-center">
           <h4 className="text-white truncate">{product.name}</h4>
          </div>
          <div className="flex justify-between items-center w-full">
           <p className="text-white">{product.price}</p>
           <button
            type="button"
            className="text-[14px] p-2 text-white bg-slate-500 rounded-lg">
            Add to cart
           </button>
          </div>
         </Link>
        ))}
       {params.slug && (
        <>
         <p>Category : {params.slug[0]}</p>
         <p>Gender : {params.slug[1]}</p>
         <p>Id : {params.slug[2]}</p>
        </>
       )}
      </div>
     </div>
    );
}