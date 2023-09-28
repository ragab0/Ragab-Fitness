const SET_CURRENT_EXERCISES="SET_CURRENT_EXERCISES";
const SET_CURRENT_TYPE="SET_CURRENT_TYPE";
const SET_SEARCH_VALUE="SET_SEARCH_VALUE";
const SET_SEARCH_SUBMITE="SET_SEARCH_SUBMITE";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";

const initialExercisesState = {
  currentExercises: [],
  currentType: "all",
  currentPage: 1,
  searchInputValue: "",
  currentSearchInputvalue: "",
}


function currentExercisesSetter(list) {
  return {
    type: SET_CURRENT_EXERCISES,
    payload: list
  }
}

function currentTypeSetter(value) {
  return {
    type: SET_CURRENT_TYPE, 
    payload: value
  }
}

function searchValueSetter(value) {
  return {
    type: SET_SEARCH_VALUE, 
    payload: value
  }
}

function searchSubmitSetter() {
  return {
    type: SET_SEARCH_SUBMITE, 
  }
}

function currentPageSetter(value) {
  return {
    type: SET_CURRENT_PAGE, 
    payload: value
  }
}


function ExercisesReducer(state=initialExercisesState, action) {
  switch (action.type) {
    case SET_CURRENT_EXERCISES:
      return {
        ...state,
        currentExercises: action.payload,
      }

    case SET_CURRENT_TYPE:
      return {
        ...state,
        currentType: action.payload,
        currentPage: 1,
      }

    case SET_SEARCH_SUBMITE: {
      return {
        ...state,
        currentType: "all",
        currentPage: 1,
        currentSearchInputvalue: state.searchInputValue,
      }
    }

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchInputValue: action.payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }

    default:
      return state;
  }
}


module.exports = ExercisesReducer;
module.exports.ExercisesActions = {
  currentExercisesSetter,
  currentTypeSetter,
  searchValueSetter,
  searchSubmitSetter,
  currentPageSetter,
}