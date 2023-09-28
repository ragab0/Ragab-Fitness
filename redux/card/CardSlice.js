const SET_CARD_LIST="SET_CARD_LIST";
const SET_CARD_IS_OPEN="SET_CARD_IS_OPEN";
const SET_CARD_ADD_TO="SET_CARD_ADD_TO";
const SET_CARD_DELETE_FROM="SET_CARD_DELETE_FROM";
const SET_CARD_CLEAR="SET_CARD_CLEAR";

const initialCardState =  {
  cardList: new Map(),
  isCardOpen: false,
}


function cardListSetter(list) {
  return {
    type: SET_CARD_LIST,
    payload: list,
  }
}

function cardIsOpenSetter(value) {
  return {
    type: SET_CARD_IS_OPEN,
    payload: value,
  }
}

function cardAddToSetter(exer) {
  return {
    type: SET_CARD_ADD_TO,
    payload: exer
  }
}

function cardDeleteFromSetter(id) {
  return {
    type: SET_CARD_DELETE_FROM,
    payload: id
  }
}

function cardClearSetter() {
  return {
    type: SET_CARD_CLEAR
  }
}


function CardReducer(state=initialCardState, action) {
  switch (action.type) {
    case SET_CARD_LIST:
      return {
        ...state,
        cardList: action.payload
      }

    case SET_CARD_IS_OPEN:
      return {
        ...state,
          isCardOpen: action.payload
      }

    case SET_CARD_ADD_TO:
      const newCardListAdd = new Map(state.cardList);
      newCardListAdd.set(action.payload.id, action.payload);
      return {
        ...state,
        cardList: newCardListAdd,
      };

    case SET_CARD_DELETE_FROM:
      const newCardListDel = new Map(state.cardList);
      newCardListDel.delete(action.payload);
      return {
        ...state,
        cardList: newCardListDel
      }

    case SET_CARD_CLEAR:
      const newCardListCle = new Map();
      return {
        ...state,
        cartList: newCardListDel
      }

    default:
      return state;
  }
}


module.exports = CardReducer
module.exports.CardActions = {
  cardListSetter,
  cardIsOpenSetter,
  cardAddToSetter,
  cardDeleteFromSetter,
  cardClearSetter,
}