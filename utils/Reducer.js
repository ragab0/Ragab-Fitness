export const initialState = {
  exercises: [], 
  exercisesTypes: [],
  currentExercises: [],
  currentExercisesCached: [],
  

  currentPagination: [],
  currentPage: 1,
  currentType: "all",
  paginationMaxPerPage: 10,

  single: {},
  singleVideos: [],
  singleSimilarTargets: 6,
  singleSimilarEquipment: 6,

  searchInputValue: "",
  isFailed: false,
  failedMsg: null,
}


export default function Reducer(state, action) {
  switch (action.type) {
    // 01 Success_1;
    // Initial fetch;
    case "fetchExercises":
      console.log("Successed, fetchExercises");
      return {
        ...state,
        isFailed: null,
        exercises: action.payload,
        exercisesTypes: ["all", ...new Set(action.payload.map(obj => obj.bodyPart))],

        currentExercises: action.payload,
        currentExercisesCached: action.payload,
        currentPagination: action.payload.slice(0,state.paginationMaxPerPage),
        types: action.payload[0]
      }

    case "fetchSingle":
      console.log("FetchingSingle");
      return {
        ...state,
        single: action.payload,
      }

    case "fetchSingleVideos":
      console.log("Fetch success, fetchSingleVideos", action.payload);
      return {
        ...state,
        isFailed: null,
        singleVideos: action.payload,

      }
    
    case "fetchFailed":
      console.log("fechFailed", action.payload);
      return {
        ...state,
        isFailed: true,
        failedMsg: action.payload
      }



    case "handlingSearchSubmiting": {
      console.log("handlingSearchSubmiting payload:", action.payload);
      const filtered = state.exercises.filter(obj => obj.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
      return {
        ...state,
        currentExercises: filtered,
        currentExercisesCached: filtered,
        currentType: "all",
        currentPagination: filtered.slice(0, 10),
        currentPage: 1,
      }
    }
    case "setSearchInputValue":
      return {
        ...state,
        searchInputValue: action.payload
      }
    case "setCurrentType":
      console.log("settingCurrentType payload:", action.payload, state.currentExercisesCached);      
      const filtered = action.payload === "all" ? state.currentExercisesCached : state.currentExercisesCached.filter(obj => obj.bodyPart.toLocaleLowerCase() === action.payload.toLocaleLowerCase())
      console.log(filtered);
      return {
        ...state,
        currentType: action.payload,
        currentExercises: filtered,
        currentPagination: filtered.slice(0,state.paginationMaxPerPage),
        currentPage: 1,
      }


    case "setCurrentPagination":
      console.log("settingCurrentPagination");
      return {
        ...state,
        currentPagination: action.payload,
      }
    case "setCurrentPage":
      console.log("setCurrentPage");
      const c = action.payload
      return {
        ...state,
        currentPage: c,
        currentPagination: state.currentExercises.slice((c-1)*state.paginationMaxPerPage, (c)*state.paginationMaxPerPage),
      }



      case "setSingleSimilarTargets":
        console.log("Setting more lclick");
        return {
          ...state,
          singleSimilarTargets: state.singleSimilarTargets + 6 
        }
      case "setSingleSimilarEquipment":
        console.log("Setting more lclick");
        return {
          ...state,
          singleSimilarEquipment: state.singleSimilarEquipment + 6 
        }

    default:
      return state;
  }
}
