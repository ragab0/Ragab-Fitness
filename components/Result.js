"use client"
import Loading from "./Loading";
import NoExercises from "./NoExercises";
import Card from "./Exercise";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ExercisesActions } from "@/redux/exercises/ExerciseSlice";
import { store } from "@/redux/Store";


function ResultBody({exers}) {
  const dispatch = useDispatch();
  const {
      currentPage,
      currentType,
      currentExercises,
      currentSearchInputvalue,
  } = useSelector(state => state.ExercisesReducer);

  useEffect(function() {
    dispatch(ExercisesActions.currentExercisesSetter(exers));
  }, [])

  useEffect(function() {
    const newExers = exers.filter(e => e.name.includes(currentSearchInputvalue)).filter(e => currentType === "all" || e.bodyPart === currentType);
    dispatch(ExercisesActions.currentExercisesSetter(newExers));
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


export default function Result({exers}) {
  return (
    <Provider store={store}>
      <ResultBody exers={exers} />
    </Provider>
  )
}