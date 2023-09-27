"use client";
import { useGlobalContext } from "@/utils/Context";
import { searchSubmitSetter, searchValueSetter } from "@/utils/Reducer";


export default function Search() {
  const { 
    appDispatch, 
    appState: {
      searchInputValue
    }, 
  } = useGlobalContext();

  function inputValueHandler(e) {
    appDispatch(searchValueSetter(e.target.value));
  }

  function searchSubmitHandler(e) {
    appDispatch(searchSubmitSetter());
  }

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
