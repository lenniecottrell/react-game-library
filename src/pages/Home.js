import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Style and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import GameDetail from "../components/GameDetail";
import Game from "../components/Game";

const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //as soon as Home component is rendered, dispatch the loadGames action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Deconstruct the updated state from the rootReducer in reducers/index.js
  //useSelector allows you to extract data from the Redux store state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    // GameList and Games are styled DIVs, Game is a component
    <GameList>
      <AnimateSharedLayout type="crossfade">
        {/* wrap the component that you want to transition to in AnimatePresence, make sure it has a toggle*/}
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
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
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
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
