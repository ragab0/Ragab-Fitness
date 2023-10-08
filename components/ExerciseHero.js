import Image from "next/image";
import Favourite from "./Favourite";
import { parts } from "@/assets/data/data";


export default async function ExHero({ exer }) {
  const { bodyPart, equipment, gifUrl, name, target } = exer;
  return (
    <section className="grid lg:grid-cols-2 gap-10 mb-[250px]">
      <div className=" bg-white flex items-center justify-center min-h-[500px] relative">
        <img alt="exercise" src={gifUrl} className="w-full h-full" />
        <Favourite exer={exer} />
      </div>
      <div className="p-4 py-16">
        <h2>{name}</h2>
        <p className=" my-12 text-[#535352]">
          <span className=" font-bold">Hint: </span> Exercises keep you strong. bup is one of the best
          exercises to target your . It will help you improve your
          mood and gain energy.
        </p>
        <ul className="flex flex-col gap-8">
          {
            parts.map(({name, img}, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className=" rounded-full bg-clrYellowLighted hover:bg-yellow-600/20 overflow-hidden p-4 w-[82px]">
                  <Image alt="img" className="img" src={img} />
                </div>
                <span className="text-xl capitalize">{name}</span>
              </li>
            ))
          }
        </ul>
        <div className="my-6">
          {[["#ffa9a9", bodyPart], ["#fcc757", target], ["#6495ed", equipment]].map(([a, b], i) => (
            <button key={i} className=" my-2 p-2 rounded-2xl hover:opacity-80 font-medium !font-sans
             text-gray-100 bg-[] me-2" style={{backgroundColor: a}}
             >
              {b}
            </button>

          ))}
        </div>        
      </div>
    </section>
  )
}