import cardActionTypes from "../actions/actionconst";

export const initialState = {
  card_list: []
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActionTypes.GET_CARDLIST_SUCCESS:
      return {
        ...state,
        card_list: action.payload,
      };
    default:
      return { ...state };
  }
};

export default cardsReducer;
