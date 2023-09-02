import axios from "axios";


/*We we'll call it inside an a comp*/
export async function fetchExercises(appDispatch) {
  try {
    const {data} = await axios("/api/exercises/");
    appDispatch({type: "fetchExercises", payload: data});
  } catch (error) {
    appDispatch({type: "fetchFailed", payload: error});
  }
}



export async function fetchSingle(appDispatch, id) {
  try {
    const res = await axios(`/api/exercises/${id}`)
    appDispatch({type:"fetchSingle", payload: res.data});
    return res.data;
  } catch (error) {
    appDispatch({type: "fetchFailed", payload: error});
  }
}



/** In case data are on server and filtered there .. BUT we do that on the client :D */
// export async function fetchExercisesBySearch(appDispatch, name) {
//   try {
//     const res = await axios(`/api/exercises?name=${name}`)
//     const filteredData = res.data.filter(d => (
//       d.name.includes(name.toLocaleLowerCase()) > -1
//     ));
//     appDispatch({type: "fetchExercises", payload: filteredData});
//   } catch (error) {
//     appDispatch({type: "fetchFailed", payload: error});
//   }
// }


