"use client";
import { store } from "@/redux/Store";
import { CardActions } from "@/redux/card/CardSlice";
import { Provider, useDispatch, useSelector } from "react-redux";


function FavouriteBody({exer}) {
  const dispatch = useDispatch();
  const { cardList } = useSelector(state => state.CardReducer);
  const isExerExists = cardList.has(exer.id);

  function favHandler() {
    dispatch(isExerExists ? CardActions.cardDeleteFromSetter(exer.id) : CardActions.cardAddToSetter(exer));
  }

  return (
    <button onClick={favHandler} className={`absolute bottom-4 left-4 border-4 
      block w-[100px] h-[100px] text-xl rounded-full cursor-pointer active:scale-90 font-bold
      ${isExerExists ? "border-mainColor70 opacity-50" : "border-mainColor50 bg-mainColor70 animate-bounce"}`}
    >
      {isExerExists ? "Remove" : "Add"}
    </button>
  )
}


export default function Favourite({exer}) {
  return (
    <Provider store={store}>
      <FavouriteBody exer={exer} />
    </Provider>
  )
}