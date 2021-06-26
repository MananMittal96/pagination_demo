import axios from "axios";
import cardActionTypes from './actionconst';

const fetchRecentPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
}

export const getCardList = () => {
  console.log("API")
  return async (dispatch) => {
    try {
      const response = await fetchRecentPosts();
      if(response.length){
        console.log(response , "action")
              dispatch(setRecentPosts(response))
      }
} catch (error) {
      console.log("error", error)
}
}
}

export const setRecentPosts = (cardData) => ({
  type:cardActionTypes.GET_CARDLIST_SUCCESS,
  payload: cardData
})