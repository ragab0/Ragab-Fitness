import axios from "axios";


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}


/**
 * 
 * @param {*} appDispatch It should rendered inside a compoenets not outside..
 */
export async function fetchExercises(appDispatch) {
  appDispatch({type: "fetchLoading"});
  const res = await axios("https://exercisedb.p.rapidapi.com/exercises", options) 
  console.log(res.data);
  appDispatch({type: "fetchExercises", payload: res.data});
}


export async function fetchExercisesBySearch(appDispatch, name) {
  appDispatch({type: "fetchLoading"});
  const res = await axios(`https://exercisedb.p.rapidapi.com/exercises/name/${name}`, options)   
  console.log(res.data);
  const filteredData = res.data.filter(d => (
    d.name.toLocalString().search(name.toLocalString()) > -1
  ));
  appDispatch({type: "fetchExercises", payload: filteredData});

}


export async function fetchSingle(appDispatch, id) {
  appDispatch({type:"fetchLoading"});
  const res = await axios(`https://exercisedb.p.rapidapi.com/exercises`, options)
  appDispatch({type:"fetchSingle", payload: res.data});
}