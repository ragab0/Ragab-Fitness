"use client"
import Loading from "./Loading";
import NoExercises from "./NoExercises";
import Card from "./Exercise";
import { useGlobalContext } from "@/utils/Context";
import { useEffect } from "react";
import { currentExercisesSetter } from "@/utils/Reducer";


export default function Result({exers}) {

  const {
    appDispatch,
    appState: {
      currentPage,
      currentType,
      currentSearch,
      currentExercises,
      currentSearchInputvalue,
    }
  } = useGlobalContext();

  useEffect(function() {
    appDispatch(currentExercisesSetter(exers));
  }, [])

  useEffect(function() {
    const newExers = exers.filter(e => e.name.includes(currentSearchInputvalue)).filter(e => currentType === "all" || e.bodyPart === currentType);
    appDispatch(currentExercisesSetter(newExers));
  }, [currentType, currentSearchInputvalue])


  if (!exers.length) return <Loading />
  else if (!currentExercises?.length) return <NoExercises />
  

  return (
    <section className="my-[150px]">
      <h2 className="mb-8 text-center">
        <span className="text-mainColor">{currentType}</span> Results
        {currentSearchInputvalue 
        && <span className="block">of <span className="text-mainColor">{currentSearchInputvalue}</span></span>}
      </h2>
      <div className="results grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        {currentExercises.slice((currentPage-1)*10, currentPage*10).map((obj, i) => <Card key={i} obj={obj} />)}
      </div>
    </section>
  )
}