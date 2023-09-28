"use client";
import { store } from "@/redux/Store";
import { ExercisesActions } from "@/redux/exercises/ExerciseSlice";
import { Provider, useDispatch, useSelector } from "react-redux";


function SearchFormBody() {
  const dispatch = useDispatch();
  const { searchInputValue } = useSelector(state => state.ExercisesReducer);

  function inputValueHandler(e) {
    dispatch(ExercisesActions.searchValueSetter(e.target.value));
  }

  function searchSubmitHandler(e) {
    dispatch(ExercisesActions.searchSubmitSetter());
  }


  return (
    <div className="grid md:grid-cols-[1fr_175px] mx-auto mb-[100px]">
      <input value={searchInputValue} onChange={inputValueHandler} name="search" placeholder="search by name.." 
        className="p-5 bg-white w-full text-xl border-2 placeholder:text-pink-900" />
      <button onClick={searchSubmitHandler} className="btn-main !rounded-none">Search</button>
    </div>
  ) 
}


export default function SearchForm() {
  return (
    <Provider store={store}>
      <SearchFormBody />
    </Provider>
  )
}
