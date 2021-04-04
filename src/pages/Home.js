import React, { useEffect } from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";

const Home = () => {
  //Fetch Games
  //as soon as Home component is rendered, dispatch the loadGames action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Deconstruct the updated state from the rootReducer in reducers/index.js
  //useSelector allows you to extract data from the Redux store state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(500px, 1fr)
  ); //500 is the minimum space for each column to take, if it gets smaller than 500px, it refits
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;