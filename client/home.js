import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const onClick = () => {
    history.push('/game');
  }

  const goToRelaxGame = () => {
    history.push('/relaxgame');
  };

  return (
    <div>
      <div className="text-center my-11 font-bold">
        Welcome to play, hope you will have a good time!
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white mx-1 font-bold py-2 px-4 rounded-full"
          onClick={onClick}
        >
          Play Challenge Game
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white mx-1 font-bold py-2 px-4 rounded-full"
          onClick={goToRelaxGame}
        >
          Play Relax Game
        </button>
      </div>
    </div>
  );
}

export default Home
