import React from 'react'
import { useHistory, Link } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const onClick = () => {
    history.push('/game');
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="my-11 font-bold">
          Welcome to play, hope you will have a good time!
        </div>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onClick}
        >
          Start the game
        </button>
        <Link to="/relaxgame">Play relax game</Link>
      </div>
    </div>
  );
}

export default Home
