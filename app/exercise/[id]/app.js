"use client";
import Videos from "@/components/Videos";
import Loading from "./loading";
import { useGlobalContext } from "@/utils/Context";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Similars from "@/components/Similars";


export default function App() {
  const {appState: {isFailed, single, exercises, singleSimilarTargets, singleSimilarEquipment, singleVideos}, appDispatch, } = useGlobalContext();
  const {id} = useParams();
  useEffect(function() {
    appDispatch({type: "fetchSingle", payload:id})
  }, [])

  if (isFailed) {
    return (
      <div className="my-[100px] flex flex-col items-center">
        <h1>Sorry, Failed to fetch data !!</h1>
        <Loading />
      </div>
    )
  }


  return (
    <main>
      <Videos videos={singleVideos}/>
      <Similars target="target muscle" 
                list={exercises.filter(obj => obj.target.toLocaleLowerCase() === single.target.toLocaleLowerCase()).slice(0,singleSimilarTargets)} 
                setMore={() => {appDispatch({type: "setSingleSimilarTargets"})}}  />
      <Similars target="equipment" 
                list={exercises.filter(obj => obj.equipment.toLocaleLowerCase() === single.equipment.toLocaleLowerCase()).slice(0,singleSimilarEquipment)} 
                setMore={function() {appDispatch({type: "setSingleSimilarEquipment"})}} />
    </main>
  )
}
