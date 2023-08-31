export const initialState = {
  exercises: [],
  currentExercises: [],
  currentType: "all",
  single: [],
}


export default function Reducer(state, action) {
  switch (action.type) {
    // 01 Success_1
    case "fetchExercises":
      return {
        ...state,
        loading: false,
        failed: null,
        exercises: action.payload,
        currentExercises: action.payload,
        types: action.payload[0]
      }

    // 01 Success_2
    case "fetchSingle":
      return {
        ...state,
        loading: false,
        failed: null,
        single: action.payload
      }

    // 02 Loading case;
    case "fetchLoading":
      return {
        ...state,
        loading: true,
        failed: null,
      }
    
    // 03 Failed case;
    case "fetchFailed":
      return {
        ...state,
        loading: false,
        failed: action.payload,
      }
      
    case "currentType":
      return {
        ...state,
        currentExercises: state.exercises.filter(a => a.bodyPart === action.payload || action.payload === "all"),
        currentType: action.payload
      }

    default:
      return state;
  }
}
