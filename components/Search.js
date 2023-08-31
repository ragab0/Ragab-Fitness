"use client";
import { useGlobalContext } from "@/utils/Context";
import { fetchExercises, fetchExercisesBySearch } from "@/utils/Fetches";
import { useEffect } from "react";


export default function Search() {
  const { appDispatch } = useGlobalContext();
  function searchHandler(e) {
    fetchExercisesBySearch(appDispatch, [e.target.value]);
  }

  useEffect(function() {
    fetchExercises(appDispatch);
  }, [])

  return (
    <section id="exercises">
      <h2 className=" max-w-md text-center mx-auto leading-[1.7] mb-16">awesome exercises you should know</h2>
      <div className="grid md:grid-cols-[1fr_175px] mx-auto mb-[100px]">
        <input name="search" placeholder="search by name.." className="p-5 bg-white w-full text-xl border-2 placeholder:text-pink-900" />
        <button className="btn-main !rounded-none" onClick={searchHandler}>Search</button>
      </div>
    </section>
  )
}
