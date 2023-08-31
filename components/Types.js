"use client";
import Image from "next/image";
import Type from "@/assets/icons/gym.png";
import { useGlobalContext } from "@/utils/Context";


const types = [
  {
    name: "all"
  },{
    name: "back"
  },{
    name: "cardio"
  },{
    name: "chest"
  },
]


export default function Types({appApi}) {
  const { appState: {currentType}, appDispatch } = useGlobalContext();
  function typeHandler(e, name) {
    appDispatch({type: "currentType", payload: name})
  };

  return (
    <section className="flex justify-center mb-[150px]">
      <div className="articles overflow-auto flex gap-[25px] pb-4">
        {
          types.map(({name}, i) => (
            <article key={i} 
                     className={`min-w-[270px] h-[270px] bg-white flex flex-col justify-evenly items-center rounded-b-md border-mainColor 
                     ${currentType === name ? "border-t-4" : ""}`}
                     onClick={(e) => typeHandler(e, name)}
                     >
                     
              <Image alt="type-img" src={Type} width={40} />
              <h4 className="text-xl capitalize font-semibold">{name}</h4>
            </article>
          ))
        }
      </div>
    </section>
  )
}