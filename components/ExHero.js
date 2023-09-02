"use client";
import Image from "next/image";
import Icon1 from "@/assets/icons/body-part.png"
import Icon2 from "@/assets/icons/target.png"
import Icon3 from "@/assets/icons/equipment.png"
import Type from "@/assets/icons/gym.png";
import { useEffect } from "react";
import { fetchExercises, fetchSingle } from "@/utils/Fetches";
import { useParams } from "next/navigation"
import { useGlobalContext } from "@/utils/Context";
// import { fetchSingleVideos } from "@/utils/youtube_fetch";

const data = [
  {
    name: "Hedooa",
    img: Icon1,
  },
  {
    name: "rashaqa",
    img: Icon2,
  },
  {
    name: "Strong man",
    img: Icon3
  },
];


export default function ExHero() {
  const { appState: {single: {bodyPart, equipment, gifUrl, name, target, }, isFailed}, appDispatch } = useGlobalContext();
  const { id } = useParams();
  useEffect(function() {
    (async function() {
      const exercise = await fetchSingle(appDispatch, id);
      await fetchExercises(appDispatch)
      // await fetchSingleVideos(appDispatch, exercise.name);
    })()
  }, [id])


  return (
    <section className="grid lg:grid-cols-2 gap-10 mb-[250px]">
      <div className=" bg-white flex items-center justify-center min-h-[500px]">
        <img alt="exercise" src={gifUrl} className="w-full h-full" />
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
            data.map(({name, img}, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className=" rounded-full bg-clrYellowLighted hover:bg-yellow-600/20 overflow-hidden p-4 w-[82px]">
                  <Image alt="img" className="img" src={img} width="100%" />
                </div>
                <span className="text-xl capitalize">{name}</span>
              </li>
            ))
          }
        </ul>
        <div className="my-6">
          {[["#ffa9a9", bodyPart], ["#fcc757", target], ["#6495ed", equipment]].map(([a, b], i) => (
            <button key={i} className=" my-2 p-2 rounded-2xl hover:opacity-80 font-medium !font-sans text-gray-100 bg-[] me-2" style={{backgroundColor: a}}>{b}</button>

          ))}
        </div>        
      </div>
    </section>
  )
}
