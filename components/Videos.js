"use client";
import { useGlobalContext } from "@/utils/Context";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";


export default function Videos({videos}) {
  return (
    <section className="videos mb-[100px]" id="exercises">
        <h2  className="mb-8">Show <span className=" text-mainColor">Videos</span></h2>
        {
          !videos.length
          ? <Loading /> 
          :
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {
            videos.map(({thumb, title, from}, i) => (
              <figure className="hover:scale-110">
                <Link href="#">
                  <Image alt="img" src={thumb} width={300} height={150} className="mx-auto" />
                </Link>
                <figcaption className="my-8">
                  <p className="text-xl">{title}</p>
                  <span className="block">{from}</span>
                </figcaption>
              </figure>
            ))
          }
        </div>
        }
    </section>
  )
}
