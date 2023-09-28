"use client";
import { useRef } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ExercisesActions } from "@/redux/exercises/ExerciseSlice";
import Image from "next/image";
import imgs from "@/assets/imgs";
import { store } from "@/redux/Store";

const { gym, leftArrow, rightArrow } = imgs;


function TypesBody({types}) {
  const articlesWaves = useRef(null);
  const dispatch = useDispatch();
  const { currentType } = useSelector(state => state.ExercisesReducer)

  function arrowHandler(moveBy) {
    articlesWaves.current.scrollBy(moveBy, 0);
  }

  function typeHandler(e, v) {
    dispatch(ExercisesActions.currentTypeSetter(v));
  }


  return (
    <section className="mb-[150px]">
      <div ref={articlesWaves} className="articles-waves flex justify-start overflow-hidden gap-4 pb-4 mb-4 ">
        {
          ["all", ...types].map((t, i) => (
            <article key={i} onClick={(e) => typeHandler(e, t)}
              className={` hover:scale-90 cursor-pointer w-full md:max-w-[290px] min-w-[270px] h-[270px] bg-white 
              flex flex-col justify-evenly items-center rounded-b-md border-mainColor 
              ${currentType === t ? "border-t-4" : ""}`}
            >
              <Image alt="type-img" src={gym} width={40} />
              <h4 className="text-xl capitalize font-semibold">{t}</h4>
            </article>
          ))
        }
      </div>
      <div className="flex justify-center gap-6 items-center">
        <button className="p-12 w-1/4 bg-clrGray hover:scale-110 hover:opacity-80" 
          onMouseMove={() => arrowHandler(-10)}></button>
        <Image alt="img" src={leftArrow} className="hover:scale-110 p-2 cursor-pointer w-[60px]" 
          onClick={() => arrowHandler(-200)} />
        <Image alt="img" src={rightArrow} className="hover:scale-110 p-2 cursor-pointer w-[60px]" 
          onClick={() => arrowHandler(200)} />
        <button className="p-12 w-1/4 bg-clrGray hover:scale-110 hover:opacity-80" 
          onMouseMove={() => arrowHandler(10)}></button>
      </div>
    </section>
  )
}


export default function Types({types}) {
  return (
    <Provider store={store}>
      <TypesBody types={types} />
    </Provider>
  )
}