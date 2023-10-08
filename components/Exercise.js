import { Suspense } from "react";
import Loading from "./Loading";
import Image from "next/image";
import Link from "next/link";


export default function Exercise({obj: {gifUrl, name, id, target, bodyPart}}) {
  return (
    <figure className="hover:scale-110 border-t-4 border-mainColor bg-white hover:">
      <Link href={`/exercise/${id}`} className="h-[300px] w-full flex items-center justify-center">
        <Suspense fallback={<Loading />}>
          <Image alt={name} src={gifUrl} width={300} height={300} className="w-full h-full" />
        </Suspense>
      </Link>
      <figcaption className="p-5">
        <button className="text-xs my-2 p-2 rounded-2xl hover:opacity-80 font-medium !font-sans text-gray-100 bg-[#ffa9a9] me-2">{bodyPart}</button>
        <button className="text-xs my-2 p-2 rounded-2xl hover:opacity-80 font-medium !font-sans text-gray-100 bg-[#fcc757]">{target}</button>
        <h4 className="text-xl">{name}</h4>
      </figcaption>
    </figure>
  )
}
