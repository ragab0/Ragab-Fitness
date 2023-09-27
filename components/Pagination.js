"use client";
import { useGlobalContext } from '@/utils/Context';
import { currentPageSetter } from '@/utils/Reducer';


export default function Pagination() {
  const { 
    appDispatch,
    appState: {
      currentPage,
      currentExercises
    },  
  } = useGlobalContext()
  
  const maxPages = Math.ceil(currentExercises.length / 10);

  function prevHandler(e) {
    if (currentPage > 1) {
      appDispatch(currentPageSetter(currentPage-1));
    }
  }

  function nextHandler(e) {
    if (currentPage < maxPages) {
      appDispatch(currentPageSetter(currentPage+1));
    }
  }

  function buttonHandler(e) {
      appDispatch(currentPageSetter(+e.target.value));
  }


  return (
    <div className="pagination my-[100px] mx-auto flex items-center justify-center gap-2 overflow-auto  pb-4">
      <button onClick={prevHandler} className={`p-4 py-2 border-2 border-transparent hover:border-clrGray rounded-md ${currentPage <= 1 ? " text-clrGray" : ""}`} disabled={currentPage <= 1} >Prev</button>
      <ul className="inline-flex gap-2">
        {
          [...Array(maxPages)].map((item, i) => (
            <li key={i} className={`${ (i+1) === 1 || (i+1) === 2 || (i+1) === maxPages || (i+1) === maxPages-1 || (i+1) === currentPage || (i+1) === currentPage-1 || (i+1) === currentPage +1  ? "" : "hidden"}`} >
              {(i+1) > 3 && (i+2) === currentPage && <span>...</span>}
              <button onClick={buttonHandler} value={i+1}  className={`p-4 py-2 cursor-pointer hover:opacity-80 hover:bg-clrGray rounded-md ${currentPage === i+1 ? "bg-clrGray" : ""}`} >{i+1}</button>
              {(i+1) < maxPages-2 && (i) === currentPage && <span>...</span>}
            </li>
          ))
        }
      </ul>
      <button onClick={nextHandler} className={`p-4 py-2 border-2 border-transparent hover:border-clrGray rounded-md ${currentPage >= maxPages ? " text-clrGray" : ""}`} disabled={currentPage >= maxPages} >Nextjs</button>
    </div>
  )
}
