import React from 'react'
import { useHistory } from 'react-router-dom'
// import Header from './header'

const Home = () => {
  const history = useHistory()
  const onClick = () => {
    history.push('/game');
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col items-center">
        <div className="my-11">
          Welcome to play, hope you will have a good time!
        </div>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={onClick}
        >
          Start the game
        </button>
      </div>
    </div>
  );
}

export default Home
