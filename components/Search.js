"use client";
import { useGlobalContext } from "@/utils/Context";
import { fetchExercises } from "@/utils/Fetches";
import { useEffect } from "react";



export default function Search() {
  const { appState: {searchInputValue}, appDispatch } = useGlobalContext();


  function inputValueHandler(e) {
    const { value } = e.target;
    appDispatch({type: "setSearchInputValue", payload: value});
  }
  function searchSubmitHandler(e) {
    appDispatch({type: "handlingSearchSubmiting", payload: searchInputValue});
  }


  useEffect(function() {
    // The initial fetch.. PUT here as the the empty search mean all exercises :);
    fetchExercises(appDispatch);
  }, [])


  return (
    <section id="exercises">
      <h2 className=" max-w-md text-center mx-auto leading-[1.7] mb-16">awesome exercises you should know</h2>
      <div className="grid md:grid-cols-[1fr_175px] mx-auto mb-[100px]">
        <input value={searchInputValue} onChange={inputValueHandler} name="search" placeholder="search by name.." className="p-5 bg-white w-full text-xl border-2 placeholder:text-pink-900" />
        <button className="btn-main !rounded-none" onClick={searchSubmitHandler}>Search</button>
      </div>
    </section>
  )
}
