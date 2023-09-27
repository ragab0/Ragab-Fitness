"use client";
import { useState } from "react";
import Card from "./Exercise";
import Loading from "./Loading";


export default function Similars({exers}) {

  const PER_PAGE = 6
  const [page, setPage] = useState(1);

  if (!exers.length) {
    return <Loading />
  }

  function moreHandler(e) {
    setPage(o => o+1);
  }

  return (
    <div className="similars grid md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
      {exers.slice(0, page * PER_PAGE).map((obj, i) => <Card key={i} obj={obj} />)}
      <button onClick={moreHandler} className=" btn-main">
        { page*PER_PAGE <= exers?.length ? `Set More (${exers.length - page*PER_PAGE})` : `End ${exers.length}`}
      </button>
    </div>
  )
}
