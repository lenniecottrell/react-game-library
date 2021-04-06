import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

//loadDetail is a function that takes an ID as a parameter, and passes it to another function that takes in the dispatch as a parameter.
//we call the API using the ID passed into the loadDetail function.
//from there, we store the API call in a variable called detailData
export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
