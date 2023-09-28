const { legacy_createStore, combineReducers } = require("redux");
const ExercisesReducer = require("./exercises/ExerciseSlice");
const CardReducer = require("./card/CardSlice");

const rootReducer = combineReducers({
  ExercisesReducer,
  CardReducer,
});


export const store = legacy_createStore(rootReducer);

store.subscribe(function(state) {
  console.log(store.getState());
})