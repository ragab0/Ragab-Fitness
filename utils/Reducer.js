const SET_CURRENT_EXERCISES="SET_CURRENT_EXERCISES";
const SET_CURRENT_TYPE="SET_CURRENT_TYPE";
const SET_SEARCH_VALUE="SET_SEARCH_VALUE";
const SET_SEARCH_SUBMITE="SET_SEARCH_SUBMITE";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";

export const initialState = {
  currentExercises: [],
  currentType: "all",
  currentPage: 1,
  searchInputValue: "",
  currentSearchInputvalue: "",

  cardList: [],
}


export function currentExercisesSetter(list) {
  return {
    type: SET_CURRENT_EXERCISES,
    payload: list
  }
}

export function currentTypeSetter(value) {
  return {
    type: SET_CURRENT_TYPE, 
    payload: value
  }
}

export function searchValueSetter(value) {
  return {
    type: SET_SEARCH_VALUE, 
    payload: value
  }
}

export function searchSubmitSetter() {
  return {
    type: SET_SEARCH_SUBMITE, 
  }
}

export function currentPageSetter(value) {
  return {
    type: SET_CURRENT_PAGE, 
    payload: value
  }
}


export default function Reducer(state=initialState, action) {
  console.log("prev state:", state);
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


    // /** Card reducer */
    // case CART_LIST_SETTER:
    //   return {
    //     ...state,
    //     cartList: action.payload
    //   }

    // case CART_ADD_TO:
    //   let newCartList;
    //   if (state.cartList.find(i => i.id == action.payload.id && i.color === action.payload.color)) {
    //     newCartList = state.cartList.map(i => {
    //       if (state.cartList.find(i => i.id == action.payload.id && i.color === action.payload.color)) {
    //         i.count += action.payload.count;
    //       }
    //       return i
    //     })
    //   } else {
    //     newCartList = [action.payload, ...state.cartList];
    //   }
    //   return {
    //     ...state,
    //     cartList: newCartList
    //   };


    // case CART_CLEAR:
    //   return {
    //     ...state,
    //     cartList: []
    //   }


    // case CART_ROOM_SELL:
    //   // Run before cloning, saving some unneeded operation :DD;
    //   if (state.cartList[action.payload].count  < 2) {
    //     return state
    //   }
        
    //   // Deep clone doesn't work (structuredClone) - Since V17;
    //   let newCartRoomSellList = state.cartList.map(i => ({...i}));
    //   newCartRoomSellList[action.payload].count -= 1
    //   return {
    //     ...state,
    //     cartList: newCartRoomSellList
    //   }

    // case CART_ROOM_ORDER:
    //   // Deep clone doesn't work (structuredClone) - Since V17;
    //   let newCartRoomOrderList = state.cartList.map(i => ({...i}));
    //   newCartRoomOrderList[action.payload].count += 1
    //   return {
    //     ...state,
    //     cartList: newCartRoomOrderList
    //   }

    // case CART_ROOM_REMOVE:
    //   return {
    //     ...state,
    //     cartList: state.cartList.filter((item, i) => item.id != action.payload)
    //   }


    default:
      return state;
  }
}



// function cartListSetter(list) {
//   return {
//     type: CART_LIST_SETTER,
//     payload: list,
//   }
// }


// function addToCartSetter(item) {
//   return {
//     type: CART_ADD_TO,
//     payload: item,
//   }
// }


// function clearCartSetter() {
//   return {
//     type: CART_CLEAR,
//   }
// }


// // Index is great in find and search than id which takes O(n);
// function orderRoomCartSetter(index) {
//   return {
//     type: CART_ROOM_ORDER,
//     payload: index,
//   }
// }


// function sellRommCartSetter(index) {
//   return {
//     type: CART_ROOM_SELL,
//     payload: index,
//   }
// }


// function removeRoomCartSetter(id) {
//   return {
//     type: CART_ROOM_REMOVE,
//     payload: id,
//   }
// }


// export const cartActions = {
//   cartListSetter,
//   addToCartSetter,
//   clearCartSetter,
//   orderRoomCartSetter,
//   sellRommCartSetter,
//   removeRoomCartSetter,
// }