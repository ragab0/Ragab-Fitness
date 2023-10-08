"use client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/redux/Store";
import { CardActions } from "@/redux/card/CardSlice";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


function CardBody() {
  const dispatch = useDispatch();
  const { 
    cardList,
    isCardOpen,
  } = useSelector(state => state.CardReducer);

  function cardHandler() {
    dispatch(CardActions.cardIsOpenSetter(!isCardOpen));
  }

  function deleteHandler(id) {
    dispatch(CardActions.cardDeleteFromSetter(id));
  }

  useEffect(function() {
    let cList = localStorage.getItem("Ramy-Fitness-Card");
    dispatch(CardActions.cardListSetter(new Map(JSON.parse(cList))));
  }, [])

  useEffect(function() {
    localStorage.setItem("Ramy-Fitness-Card", JSON.stringify([...cardList]));
  }, [cardList])


  return (
    <aside className={`fixed top-0 right-0 z-10 w-1/4 min-w-[300px] h-full flex ${isCardOpen ? "" : "translate-x-full"}`}>
      <div onClick={cardHandler} className="absolute top-1/2 right-full border-[50px] border-transparent 
        border-e-mainColor50 hover:border-opacity-70 cursor-pointer z-20 ">
      </div>
      <div className="body overflow-auto w-full bg-mainColor50 py-5 px-1 z-20" style={{direction: "rtl"}}>
        <header>
          <h2 className="mb-8 py-4 border-b-4 border-current text-center font-serif cursor-default">
            <span className="text-mainColor">My</span> Plan
          </h2>
        </header>
        <section className="overflow-hidden">
        {
          !cardList.size
          ? <h2 className="my-[50px] text-center animate-pulse cursor-default">
              There is <span className=" text-mainColor">no Plan</span> yet
            </h2>
          : [...cardList.values()].map(({gifUrl, name, id}, i) => (
            <figure key={i} aria-label={"#" + (i+1)} className={`animation-card p-5 mb-5 flex gap-4 bg-mainColor70 
            text-center rounded-md relative before:content-[attr(aria-label)] before:absolute before:-top-4 before:left-2
            before:text-[100px] before:text-end before:pointer-events-none before:z-[-1] before:text-mainColor50 `}
            >
              <Link href={`/exercise/${id}`}>
                <img alt={name} src={gifUrl}
                  className=" w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] overflow-hidden
                  border-2 border-mainColor50 p-2 rounded-md"
                />
              </Link>
              <figcaption className="w-full grid grid-rows-[auto_1fr] relative before:">
                <h4 className="lg:text-xl">{name}</h4>
                <div className="flex items-end justify-center gap-4">
                  <button onClick={() => deleteHandler(id)} 
                  className="py-1 px-2 border-mainColor50 rounded-md border-2 opacity-50 shadow-xl">Remove</button>
                  <Link href={`/exercise/${id}`} className="py-1 px-2 bg-mainColor50 border-2 shadow-lg border-mainColor50 hover:opacity-80 rounded-md">View</Link>
                </div>
              </figcaption>
            </figure>
          ))
        }
        </section>
      </div>
    </aside>
  )
}


export default function Card() {
  return (
    <Provider store={store}>
      <CardBody />
    </Provider>
  )
}