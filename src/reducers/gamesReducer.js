//Create state for the reducer
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    //when we dispatch an action called "FETCH _GAMES", it will return the state
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
