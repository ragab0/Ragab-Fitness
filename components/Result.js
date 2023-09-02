"use client";
import { useGlobalContext } from "@/utils/Context";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Card from "./Card";


export default function Result({pagination=true}) {
  const {appState: {exercises, currentExercises, currentPagination, currentType}} = useGlobalContext();
  const current = pagination ? currentPagination : currentExercises

  if (!exercises.length) {
    return (
      <div className=" flex justify-center my-[100px] text-red-400">
        <Loading />
      </div>
    )
  }

  if (!current.length) {
    return (
      <section>
        <h2 className="text-center mb-8">There is no data show</h2>
      </section>
    )
  }


  return (
    <section>
      <h2 className="text-center mb-8">{currentType} Results</h2>
      <div className="results grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        {current.map((obj, i) => <Card key={i} obj={obj} />)}
      </div>
      {pagination && <Pagination />}
    </section>
  )
}
