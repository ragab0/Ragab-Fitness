"use client";
import Image from "next/image";
import Type from "@/assets/icons/gym.png";
import { useGlobalContext } from "@/utils/Context";
import { useRef } from "react";
import LeftArrow from "@/assets/icons/left-arrow.png"
import RightArrow from "@/assets/icons/right-arrow.png"


export default function Types() {
  const { appState: {exercisesTypes, currentType}, appDispatch } = useGlobalContext();
  const articlesWaves = useRef(null);
  function typeHandler(e, v) {
    appDispatch({type: "setCurrentType", payload: v})
  };

  function arrowHandler(moveBy) {
    articlesWaves.current.scrollBy(moveBy, 0);
  }


  return (
    <section className="mb-[150px]">
      <div ref={articlesWaves} className="articles-waves flex justify-start overflow-hidden gap-4 pb-4 mb-4 ">
        {
          exercisesTypes.map((t, i) => (
            <article key={i} 
                     className={` hover:scale-90 cursor-pointer w-full md:max-w-[290px] min-w-[270px] h-[270px] bg-white flex flex-col justify-evenly items-center rounded-b-md border-mainColor 
                     ${currentType === t ? "border-t-4" : ""}`}
                     onClick={(e) => typeHandler(e, t)}
                     >
                     
              <Image alt="type-img" src={Type} width={40} />
              <h4 className="text-xl capitalize font-semibold">{t}</h4>
            </article>
          ))
        }
      </div>
      <div className="flex justify-center gap-6 items-center">
        <button className="p-12 w-1/4 bg-clrGray hover:scale-110 hover:opacity-80" onMouseMove={() => arrowHandler(-10)}></button>
        <Image alt="img" src={LeftArrow} className="hover:scale-110 p-2 cursor-pointer w-[60px]" onClick={() => arrowHandler(-200)} />
        <Image alt="img" src={RightArrow} className="hover:scale-110 p-2 cursor-pointer w-[60px]" onClick={() => arrowHandler(200)} />
        <button className="p-12 w-1/4 bg-clrGray hover:scale-110 hover:opacity-80" onMouseMove={() => arrowHandler(10)}></button>
      </div>
    </section>
  )
}