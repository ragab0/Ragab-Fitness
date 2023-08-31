"use client";
import { useGlobalContext } from "@/utils/Context";
import Link from "next/link";


export default function Result({pagination=true}) {
  const {appState: {currentExercises, currentType}} = useGlobalContext();
  return (
    <section>
      <h2 className=" text-center mb-8">{currentType} Results</h2>
      <div className="results grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        {
          currentExercises.map(({gifUrl, name, id, target}, i) => (
            <figure key={i} className="border-t-4 border-mainColor bg-white">
              <Link href={`/exercise/${id}`} className="h-[300px] w-full flex items-center justify-center">
                <img alt={name} src={gifUrl} className=" w-full h-full" />
              </Link>
              <figcaption className="p-5">
                <button className="btn-main !text-xs my-2 !p-2 !px-4 !rounded-[50px]">{target}</button>
                <h4 className="text-xl">{name}</h4>
              </figcaption>
            </figure>
          ))
        }
      </div>
      <div className="pagination my-[100px] overflow-auto  pb-4">
        <span>{"<"}</span>
        <ul className="inline-flex gap-4">
          {
            [...Array()].map((item, i) => (
              <li key={i} className="p-4 py-2 cursor-pointer hover:opacity-80 bg-clrGray rounded-md">
                {i+1}
              </li>
            ))
          }
        </ul>
        <span>{">"}</span>
      </div>
    </section>
  )
}
