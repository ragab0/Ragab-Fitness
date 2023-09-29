"use client";
import { store } from '@/redux/Store';
import { ExercisesActions } from '@/redux/exercises/ExerciseSlice';
import { useRef } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';


function PaginationBody() {
  const pagiItems = useRef(null);
  const dispatch = useDispatch();
  const { 
      currentPage,
      currentExercises
  } = useSelector(state => state.ExercisesReducer);
  
  const maxPages = Math.ceil(currentExercises.length / 10);

  function prevHandler(e) {
    if (currentPage > 1) {
      dispatch(ExercisesActions.currentPageSetter(currentPage-1));
    }
  }

  function nextHandler(e) {
    if (currentPage < maxPages) {
      dispatch(ExercisesActions.currentPageSetter(currentPage+1));
    }
  }

  function buttonHandler(e) {
      dispatch(ExercisesActions.currentPageSetter(+e.target.value));
  }

  const viewers = new Set([1, 2, maxPages, maxPages-1, currentPage, currentPage-1, currentPage+1]);

  return (
    <div className="pagination my-[100px] mx-auto pb-4 flex gap-2">
      <button onClick={prevHandler} disabled={currentPage <= 1}
        className={`p-4 py-2 border-2 border-clrGray rounded-md ${currentPage !==1 ? "hover:bg-mainColor50 hover:border-mainColor50" : ""}
        ${currentPage <= 1 ? " text-clrGray" : ""}`} 
      >
        Prev
      </button>
      <ul ref={pagiItems} className="flex gap-2 overflow-auto pb-2">
        {
          [...Array(maxPages)].map((item, i) => (
            <li key={i}>
              <button onClick={buttonHandler} value={i+1}
                className={`p-4 py-2 cursor-pointer hover:opacity-80 hover:bg-clrGray rounded-md 
                ${currentPage === i+1 ? "bg-clrGray" : ""}`}
              >
              {i+1}
              </button>
            </li>
          ))
        }
      </ul>
      <button onClick={nextHandler} disabled={currentPage >= maxPages}
        className={`p-4 py-2 border-2 border-clrGray rounded-md ${currentPage < maxPages ? "hover:bg-mainColor50 hover:border-mainColor50" : ""}
        ${currentPage >= maxPages ? " text-clrGray" : ""}`}
      >
        Nextjs
      </button>
    </div>
  )
}


export default function Pagination() {
  return (
    <Provider store={store}>
        <PaginationBody />
    </Provider>
  )
}